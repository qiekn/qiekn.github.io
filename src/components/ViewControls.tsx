import { ViewToggle } from "./ViewToggle";
import type { ViewMode } from "@/data/types";

interface ViewControlsProps {
  value: ViewMode;
  onChange: (value: ViewMode) => void;
}

export function ViewControls({ value, onChange }: ViewControlsProps) {
  return (
    <div className="flex items-center justify-between pb-2">
      <span className="text-ink-muted font-mono text-xs font-medium tracking-[0.16em]">
        BROWSE
      </span>
      <div className="flex items-center gap-4">
        <span className="text-ink-muted hidden font-mono text-xs font-medium tracking-[0.14em] sm:inline">
          VIEW
        </span>
        <ViewToggle value={value} onChange={onChange} />
      </div>
    </div>
  );
}
