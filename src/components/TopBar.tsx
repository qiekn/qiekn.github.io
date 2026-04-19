export function TopBar() {
  return (
    <header className="flex items-center justify-between">
      <p className="text-ink font-mono text-sm font-medium tracking-[0.16em]">
        QIEKN / PORTFOLIO
      </p>
      <div className="text-ink-muted hidden items-center gap-4 font-mono text-xs font-medium tracking-[0.12em] md:flex">
        <span>2026</span>
      </div>
    </header>
  );
}
