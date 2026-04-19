import { cn } from "@/lib/utils";
import type { ViewMode } from "@/data/types";
import { GridIcon, ListIcon } from "./icons";

interface ViewToggleProps {
  value: ViewMode;
  onChange: (value: ViewMode) => void;
}

const segments: {
  value: ViewMode;
  label: string;
  Icon: typeof GridIcon;
}[] = [
  { value: "grid", label: "GRID", Icon: GridIcon },
  { value: "list", label: "LIST", Icon: ListIcon },
];

export function ViewToggle({ value, onChange }: ViewToggleProps) {
  return (
    <div
      role="radiogroup"
      aria-label="View mode"
      className="border-line flex overflow-hidden border"
    >
      {segments.map(({ value: segValue, label, Icon }, i) => {
        const active = value === segValue;
        return (
          <button
            key={segValue}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(segValue)}
            className={cn(
              "flex items-center gap-2 px-3.5 py-2.5 font-mono text-[11px] font-medium tracking-[0.12em] transition-colors",
              i > 0 && "border-line border-l",
              active
                ? "bg-ink text-bg"
                : "bg-transparent text-ink hover:bg-bg-card"
            )}
          >
            <Icon size={12} strokeWidth={2} />
            {label}
          </button>
        );
      })}
    </div>
  );
}
