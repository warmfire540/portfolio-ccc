interface TerminalChromeProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function TerminalChrome({
  children,
  title,
  className = '',
}: Readonly<TerminalChromeProps>) {
  return (
    <div
      className={`rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl shadow-black/10 dark:shadow-black/50 ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-zinc-100/80 dark:bg-zinc-800/80 border-b border-zinc-200/50 dark:border-zinc-700/50">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        {title && (
          <span className="ml-3 text-xs text-zinc-400 dark:text-zinc-500 font-mono">
            {title}
          </span>
        )}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
