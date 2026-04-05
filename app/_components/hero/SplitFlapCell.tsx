'use client';

/**
 * Split-flap cell with 3D falling-flap animation.
 * Inspired by https://github.com/MohdYahyaMahmodi/splitflap.org
 *
 * Each cell has three layers:
 *  1. Static top half  — shows the NEXT character (revealed as flap falls)
 *  2. Static bottom half — shows the CURRENT character (updates at flip midpoint)
 *  3. Falling flap — always in DOM, visible only during flip; rotates 0 → -90deg
 */

import { useEffect, useRef, useState } from 'react';

export const FLAP_ALPHABET = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,':()&!?+-";

const FAST_SPEED_MS = 25;
const FINAL_FLIP_MS = 360;

function charToIndex(c: string): number {
  const idx = FLAP_ALPHABET.indexOf(c.toUpperCase());
  return Math.max(idx, 0);
}

function nextChar(current: string): string {
  const idx = charToIndex(current);
  return FLAP_ALPHABET[(idx + 1) % FLAP_ALPHABET.length];
}

export type SplitFlapSize = 'sm' | 'lg';

const sizeStyles: Record<SplitFlapSize, { cell: string; halfH: string }> = {
  sm: {
    cell: 'w-[1.1em] sm:w-[1.2em] text-[0.65rem] sm:text-xs',
    halfH: 'h-[0.55em]',
  },
  lg: {
    cell: 'w-[0.95em] sm:w-[1.05em] text-xl sm:text-3xl lg:text-4xl',
    halfH: 'h-[0.55em]',
  },
};

export function SplitFlapCell({
  targetChar,
  startDelayMs,
  size,
  bright,
}: Readonly<{
  targetChar: string;
  startDelayMs: number;
  size: SplitFlapSize;
  bright?: boolean;
}>) {
  const target = targetChar.toUpperCase();
  const [topChar, setTopChar] = useState(' ');
  const [bottomChar, setBottomChar] = useState(' ');
  const [flapChar, setFlapChar] = useState(' ');
  const [flapVisible, setFlapVisible] = useState(false);
  const fallingRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef(' ');

  useEffect(() => {
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const flipOnce = (
      from: string,
      to: string,
      isFinal: boolean,
    ): Promise<void> => {
      return new Promise((resolve) => {
        if (cancelled) {
          resolve();
          return;
        }

        // Prepare the three layers
        setTopChar(to);
        setFlapChar(from);
        setBottomChar(from);
        setFlapVisible(true);

        // Wait a frame for React to render the flap, then animate
        requestAnimationFrame(() => {
          if (cancelled) {
            resolve();
            return;
          }

          const el = fallingRef.current;
          if (!el) {
            setBottomChar(to);
            setFlapVisible(false);
            currentRef.current = to;
            resolve();
            return;
          }

          const duration = isFinal ? FINAL_FLIP_MS : FAST_SPEED_MS;

          // Reset transform before animating
          el.style.transform = 'rotateX(0deg)';
          el.style.opacity = '1';

          const anim = el.animate(
            [
              { transform: 'rotateX(0deg)', opacity: 1 },
              { transform: 'rotateX(-90deg)', opacity: 0 },
            ],
            {
              duration,
              easing: isFinal ? 'ease-in' : 'linear',
              fill: 'forwards',
            },
          );

          // At midpoint, update bottom half to new character
          timeoutId = setTimeout(() => {
            if (!cancelled) setBottomChar(to);
          }, duration * 0.5);

          anim.onfinish = () => {
            clearTimeout(timeoutId);
            if (!cancelled) {
              setBottomChar(to);
              setFlapVisible(false);
            }
            currentRef.current = to;
            anim.cancel();
            resolve();
          };
        });
      });
    };

    const run = async () => {
      // Stagger delay
      await new Promise<void>((r) => {
        timeoutId = setTimeout(r, startDelayMs);
      });
      if (cancelled) return;

      let current = currentRef.current;
      const stopIdx = charToIndex(target);

      // Cycle through the alphabet until we reach the target
      while (charToIndex(current) !== stopIdx && !cancelled) {
        const next = nextChar(current);
        const isFinal = charToIndex(next) === stopIdx;
        await flipOnce(current, next, isFinal);
        current = next;
      }
    };

    run();

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [target, startDelayMs]);

  const s = sizeStyles[size];
  const textColor = bright
    ? 'text-amber-950 dark:text-amber-100'
    : 'text-amber-800 dark:text-amber-300';

  return (
    <div
      className={[
        'relative inline-block align-bottom font-mono uppercase leading-none',
        s.cell,
      ].join(' ')}
      style={{ perspective: '3000px' }}
    >
      <div className="relative rounded-sm overflow-hidden border border-amber-400/40 dark:border-amber-900/55 shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
        {/* Top half — shows next character (revealed as flap falls away) */}
        <div
          className={[
            'overflow-hidden text-center',
            'bg-gradient-to-b from-amber-50 to-amber-100/80 dark:from-zinc-800 dark:to-zinc-900',
            textColor,
            s.halfH,
          ].join(' ')}
        >
          <span className="block leading-[1.1em]">{topChar}</span>
        </div>

        {/* Split line */}
        <div
          className="h-px bg-amber-300/50 dark:bg-black/80 shadow-[0_-1px_2px_rgba(0,0,0,0.1),0_1px_1px_rgba(255,255,255,0.3)] dark:shadow-[0_-1px_2px_rgba(0,0,0,0.7),0_1px_1px_rgba(255,255,255,0.04)]"
          aria-hidden
        />

        {/* Bottom half — shows current character, updates at flip midpoint */}
        <div
          className={[
            'overflow-hidden text-center',
            'bg-gradient-to-b from-amber-100/80 via-amber-100/60 to-amber-200/50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950',
            textColor,
            s.halfH,
          ].join(' ')}
        >
          <span className="block leading-[1.1em] -mt-[55%]">{bottomChar}</span>
        </div>

        {/* Falling flap — always in DOM, hidden when not flipping */}
        <div
          ref={fallingRef}
          className={[
            'absolute top-0 left-0 right-0 overflow-hidden',
            'bg-gradient-to-b from-amber-50 to-amber-100/80 dark:from-zinc-800 dark:to-zinc-900',
            'border-b border-amber-300/30 dark:border-black/60',
            textColor,
            s.halfH,
          ].join(' ')}
          style={{
            transformOrigin: 'bottom center',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            opacity: flapVisible ? 1 : 0,
            pointerEvents: 'none',
          }}
        >
          <span className="block text-center leading-[1.1em]">{flapChar}</span>
        </div>
      </div>
    </div>
  );
}
