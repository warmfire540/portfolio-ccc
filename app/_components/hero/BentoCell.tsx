'use client';

interface BentoCellProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function BentoCell({
  children,
  className = '',
  delay = 0,
}: Readonly<BentoCellProps>) {
  return (
    <div
      className={`rounded-2xl border border-zinc-200/60 dark:border-zinc-700/50 bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm p-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-[fade-in-up_0.5s_ease-out_both] ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
