import { cn } from "@/lib/utils";
import type { Work, WorkLinks } from "@/data/types";
import { ArrowIcon, BilibiliIcon, GithubIcon, NotionIcon, WebsiteIcon } from "./icons";

const linkMeta = [
  { key: "website", label: "Website", Icon: WebsiteIcon, onlyIfSet: true },
  { key: "notes", label: "Notes", Icon: NotionIcon },
  { key: "github", label: "GitHub", Icon: GithubIcon },
  { key: "videos", label: "Videos", Icon: BilibiliIcon },
] as const;

interface WorkCardProps {
  work: Work;
  idx: string;
}

function LinkRow({ links }: { links: WorkLinks }) {
  return (
    <div className="border-line bg-bg-inset flex items-center justify-between border-t px-5 py-3.5">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        {linkMeta.map(({ key, label, Icon, ...rest }) => {
          const href = links[key];
          if (!href && "onlyIfSet" in rest && rest.onlyIfSet) return null;
          const Tag = href ? "a" : "span";
          return (
            <Tag
              key={key}
              {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
              className={cn(
                "inline-flex items-center gap-1.5 font-mono text-[11px] font-medium tracking-wide",
                href
                  ? "text-ink hover:text-accent-rust transition-colors"
                  : "text-ink-subtle cursor-default",
              )}
            >
              <Icon size={12} strokeWidth={2} />
              {label}
            </Tag>
          );
        })}
      </div>
      <ArrowIcon size={16} strokeWidth={1.75} className="text-ink" />
    </div>
  );
}

export function WorkCard({ work, idx }: WorkCardProps) {
  const { title, tag, description, cover, links } = work;
  return (
    <article className="border-line bg-bg-card flex h-full flex-col overflow-hidden border">
      <div
        className="h-48 w-full md:h-52"
        style={{
          backgroundImage: `linear-gradient(135deg, ${cover.from} 0%, ${cover.to} 100%)`,
        }}
        aria-hidden
      />
      <div className="border-line flex items-center justify-between border-t px-4 py-3">
        <span className="text-ink-muted font-mono text-[11px] font-medium tracking-[0.14em]">
          {idx}
        </span>
        <span className="text-ink-muted font-mono text-[11px] font-medium tracking-[0.14em]">
          {tag}
        </span>
      </div>
      <div className="border-line flex flex-1 flex-col gap-2.5 border-t px-5 pt-6 pb-5">
        <h3 className="text-ink text-xl leading-tight font-semibold">
          {title}
        </h3>
        <p className="text-ink-muted text-sm leading-relaxed">{description}</p>
      </div>
      <LinkRow links={links} />
    </article>
  );
}
