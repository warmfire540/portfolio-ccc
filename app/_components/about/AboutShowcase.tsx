'use client';

import { useState, useMemo, useCallback } from 'react';
import { ReactGoogleReviews } from 'react-google-reviews';
import 'react-google-reviews/dist/index.css';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  type Node,
  type Edge,
  type NodeProps,
  Handle,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { STATS, TEAM, MILESTONES, VALUES, RECOGNITIONS } from './data';

/* ------------------------------------------------------------------ */
/*  Steps — each maps to a milestone + detail panel content            */
/* ------------------------------------------------------------------ */

interface Step {
  id: string;
  milestone: (typeof MILESTONES)[number];
  accent: string;
  panel: React.ReactNode;
}

function StatBar({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-2xl font-bold text-primary-600 dark:text-primary-400 min-w-[4rem] text-right font-mono">
        {value}
      </span>
      <span className="text-sm text-zinc-600 dark:text-zinc-400">{label}</span>
    </div>
  );
}

function TeamCard({ member }: { member: (typeof TEAM)[number] }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-14 h-14 rounded-xl overflow-hidden border border-primary-200/40 dark:border-primary-800/30 shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.imageUrl}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-zinc-800 dark:text-white">
          {member.name}
        </p>
        <p className="text-xs text-primary-600 dark:text-primary-400 mb-1">
          {member.role}
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
          {member.bio[0]}
        </p>
      </div>
    </div>
  );
}

const STEPS: Step[] = [
  {
    id: 'founded',
    milestone: MILESTONES[0],
    accent: '#0284c7',
    panel: (
      <div className="space-y-5">
        <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Founded in 2025, Curious Cat Consulting was built on a foundation of
          technical excellence and a genuine curiosity about solving complex
          business problems through thoughtful software solutions.
        </p>
        <div className="space-y-3">
          {STATS.map((s) => (
            <StatBar key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'experience',
    milestone: MILESTONES[1],
    accent: '#059669',
    panel: (
      <div className="space-y-4">
        <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Meet the team behind Curious Cat Consulting.
        </p>
        {TEAM.map((m) => (
          <TeamCard key={m.name} member={m} />
        ))}
      </div>
    ),
  },
  {
    id: 'philosophy',
    milestone: MILESTONES[2],
    accent: '#7c3aed',
    panel: (
      <div className="space-y-3">
        {VALUES.map((v) => (
          <div key={v.title} className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-lg bg-white/80 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700 flex items-center justify-center shrink-0">
              <FontAwesomeIcon
                icon={v.icon}
                className="w-4 h-4 text-primary-600 dark:text-primary-400"
                aria-hidden
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-800 dark:text-white">
                {v.title}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                {v.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'mission',
    milestone: MILESTONES[3],
    accent: '#dc2626',
    panel: (
      <div className="space-y-5">
        <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Don&rsquo;t just take our word for it. Here&rsquo;s what clients have
          to say about working with Curious Cat Consulting.
        </p>

        <div className="bg-white dark:bg-zinc-900 rounded-lg p-3 border border-zinc-200/60 dark:border-zinc-700">
          <ReactGoogleReviews
            layout="badge"
            featurableId={process.env.NEXT_PUBLIC_FEATURABLE_WIDGET_ID ?? ''}
          />
        </div>

        {RECOGNITIONS.map((r) => (
          <div key={r.title} className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={r.icon}
              className="w-5 h-5 text-emerald-500 shrink-0"
              aria-hidden
            />
            <div>
              <p className="text-sm font-semibold text-zinc-800 dark:text-white">
                {r.title}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {r.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  ReactFlow node                                                     */
/* ------------------------------------------------------------------ */

function StepNode({ data }: NodeProps) {
  const icon = data.icon as IconDefinition;
  const accent = data.accent as string;
  const active = data.active as boolean;
  const visited = data.visited as boolean;

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        className="!w-2 !h-2 !border-0"
        style={{ background: accent }}
      />
      <div
        className="flex flex-col items-center justify-center gap-2 w-[155px] h-[140px] rounded-xl border-2 transition-all duration-300 cursor-pointer"
        style={{
          borderColor: active ? accent : visited ? `${accent}66` : '#d4d4d8',
          background: active ? `${accent}12` : 'rgba(255,255,255,0.85)',
          boxShadow: active ? `0 0 20px ${accent}25` : 'none',
        }}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
          style={{
            background: active || visited ? `${accent}18` : '#f4f4f5',
          }}
        >
          <FontAwesomeIcon
            icon={icon}
            className="w-6 h-6 transition-colors duration-300"
            style={{ color: active || visited ? accent : '#a1a1aa' }}
            aria-hidden
          />
        </div>
        <span
          className="text-xs font-semibold transition-colors duration-300 text-center max-w-[100px]"
          style={{ color: active ? accent : '#52525b' }}
        >
          {data.label as string}
        </span>
        <span className="text-[10px] text-zinc-400 font-medium">
          {data.year as string}
        </span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        className="!w-2 !h-2 !border-0"
        style={{ background: accent }}
      />
    </>
  );
}

const nodeTypes = { step: StepNode };

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AboutShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const step = STEPS[activeStep];

  const nodes: Node[] = useMemo(
    () =>
      STEPS.map((s, i) => ({
        id: s.id,
        type: 'step',
        position: { x: i * 200, y: 60 },
        data: {
          label: s.milestone.title,
          icon: s.milestone.icon,
          accent: s.accent,
          year: s.milestone.year,
          active: i === activeStep,
          visited: i < activeStep,
        },
      })),
    [activeStep],
  );

  const edges: Edge[] = useMemo(
    () =>
      STEPS.slice(0, -1).map((s, i) => {
        const visited = i < activeStep;
        const active = i === activeStep;
        return {
          id: `${s.id}-${STEPS[i + 1].id}`,
          source: s.id,
          target: STEPS[i + 1].id,
          animated: active,
          style: {
            stroke: visited || active ? STEPS[i].accent : '#d4d4d8',
            strokeWidth: active ? 2.5 : 2,
            opacity: visited || active ? 1 : 0.4,
          },
        };
      }),
    [activeStep],
  );

  const handleNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    const idx = STEPS.findIndex((s) => s.id === node.id);
    if (idx !== -1) setActiveStep(idx);
  }, []);

  const flowKey = `about-flow-${activeStep}`;

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Blueprint background (matches hero) */}
      <div className="absolute inset-0 bg-[#e8f0fa] dark:bg-[#0c1929]" />
      <div
        className="absolute inset-0 opacity-[0.5] dark:opacity-[0.32]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(2,132,199,0.42) 1px, transparent 1px),
            linear-gradient(90deg, rgba(2,132,199,0.42) 1px, transparent 1px),
            linear-gradient(rgba(2,132,199,0.24) 1px, transparent 1px),
            linear-gradient(90deg, rgba(2,132,199,0.24) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(232,240,250,0.72)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(12,25,41,0.82)_100%)]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
              About Curious Cat Consulting
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Click any step to explore our story, or use the arrows to walk
              through it.
            </p>
          </div>

          {/* Flow diagram */}
          <div className="h-[220px] w-full rounded-md overflow-hidden border border-primary-200/40 dark:border-primary-800/30 bg-white/85 dark:bg-zinc-900/85 shadow-lg mb-8">
            <ReactFlow
              key={flowKey}
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              onNodeClick={handleNodeClick}
              fitView
              fitViewOptions={{ padding: 0.3 }}
              proOptions={{ hideAttribution: true }}
              nodesDraggable={false}
              nodesConnectable={false}
              panOnDrag={false}
              zoomOnScroll={false}
              zoomOnPinch={false}
              zoomOnDoubleClick={false}
              preventScrolling={false}
            >
              <Background
                variant={BackgroundVariant.Dots}
                gap={20}
                size={1}
                className="!bg-transparent"
                color="var(--color-primary-200)"
              />
            </ReactFlow>
          </div>

          {/* Detail panel */}
          <div className="rounded-md border border-primary-200/40 dark:border-primary-800/30 bg-white/85 dark:bg-zinc-900/85 shadow-lg overflow-hidden">
            {/* Panel header */}
            <div
              className="flex items-center justify-between px-6 py-4 border-b transition-colors duration-300"
              style={{
                borderColor: `${step.accent}30`,
                background: `${step.accent}08`,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${step.accent}18` }}
                >
                  <FontAwesomeIcon
                    icon={step.milestone.icon}
                    className="w-5 h-5"
                    style={{ color: step.accent }}
                    aria-hidden
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-800 dark:text-white">
                    {step.milestone.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {step.milestone.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStep((i) => Math.max(0, i - 1))}
                  disabled={activeStep === 0}
                  className="w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-zinc-800 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  aria-label="Previous step"
                >
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="w-3 h-3"
                    aria-hidden
                  />
                </button>
                <span className="text-xs text-zinc-400 font-mono min-w-[3rem] text-center">
                  {activeStep + 1}/{STEPS.length}
                </span>
                <button
                  onClick={() =>
                    setActiveStep((i) => Math.min(STEPS.length - 1, i + 1))
                  }
                  disabled={activeStep === STEPS.length - 1}
                  className="w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-zinc-800 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  aria-label="Next step"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="w-3 h-3"
                    aria-hidden
                  />
                </button>
              </div>
            </div>

            {/* Panel content */}
            <div
              key={activeStep}
              className="p-6 animate-[fade-in-up_0.3s_ease-out]"
            >
              {step.panel}
            </div>
          </div>

          {/* Step indicator dots (mobile-friendly) */}
          <div className="flex justify-center gap-2 mt-6">
            {STEPS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveStep(i)}
                aria-label={`Go to ${s.milestone.title}`}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: i === activeStep ? s.accent : '#94a3b8',
                  transform: i === activeStep ? 'scale(1.4)' : 'scale(1)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
