import { cn } from "@/lib/utils";
import type { Section as SectionData, ViewMode } from "@/data/types";
import { WorkCard } from "./WorkCard";
import { WorkListRow } from "./WorkListRow";

interface SectionProps {
  section: SectionData;
  view: ViewMode;
}

export function Section({ section, view }: SectionProps) {
  const { id, description, title, cols, works } = section;

  return (
    <section id={id} className="flex flex-col gap-8 py-2">
      <header className="border-line flex items-end justify-between border-b pb-5">
        <div className="flex flex-col gap-2.5">
          <h2 className="text-ink text-2xl leading-tight font-semibold md:text-3xl lg:text-4xl">
            {title}
          </h2>
          <span className="text-ink-muted font-mono text-xs font-medium tracking-[0.15em] pl-[0.1em]">
            {description}
          </span>
        </div>
        <span className="text-ink-muted font-mono text-xs font-medium tracking-[0.14em]">
          {String(works.length).padStart(2, "0")}{" "}
          {cols === 2 ? "PROJECTS" : "ITEMS"}
        </span>
      </header>

      {view === "grid" ? (
        <div
          className={cn(
            "grid gap-6",
            cols === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          )}
        >
          {works.map((work, i) => (
            <WorkCard
              key={work.id}
              work={work}
              idx={String(i + 1).padStart(2, "0")}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col">
          {works.map((work, i) => (
            <WorkListRow
              key={work.id}
              work={work}
              idx={String(i + 1).padStart(2, "0")}
            />
          ))}
        </div>
      )}
    </section>
  );
}
