export function Footer() {
  return (
    <footer className="border-line flex flex-col items-start justify-between gap-3 border-t pt-7 md:flex-row md:items-center">
      <p className="text-ink-muted font-mono text-[11px] font-medium tracking-[0.12em]">
        © 2026 · qiekn · built with vite + react + tailwind
      </p>
      <div className="flex items-center gap-5">
        <a
          href="https://github.com/qiekn/qiekn.github.io"
          className="text-ink hover:text-accent-rust font-mono text-[11px] font-medium tracking-[0.12em] transition-colors"
        >
          VIEW SOURCE ↗
        </a>
      </div>
    </footer>
  );
}
