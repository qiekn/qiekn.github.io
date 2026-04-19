import { cn } from "@/lib/utils";
import type { Work, WorkLinks } from "@/data/types";
import {
  ArrowIcon,
  BilibiliIcon,
  GithubIcon,
  NotionIcon,
  WebsiteIcon,
} from "./icons";

const linkMeta = [
  { key: "website", label: "Website", Icon: WebsiteIcon, onlyIfSet: true },
  { key: "notes", label: "Notes", Icon: NotionIcon },
  { key: "github", label: "GitHub", Icon: GithubIcon },
  { key: "videos", label: "Videos", Icon: BilibiliIcon },
] as const;

interface WorkListRowProps {
  work: Work;
  idx: string;
}

function InlineLinks({ links }: { links: WorkLinks }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
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
                : "text-ink-subtle cursor-default"
            )}
          >
            <Icon size={12} strokeWidth={2} />
            {label}
          </Tag>
        );
      })}
    </div>
  );
}

export function WorkListRow({ work, idx }: WorkListRowProps) {
  const { title, tag, links } = work;
  return (
    <div className="border-line-soft grid grid-cols-1 items-center gap-y-2 border-b py-4 md:grid-cols-[auto_1fr_auto_auto] md:gap-x-8 md:py-5">
      <div className="flex items-center gap-6 md:gap-7">
        <span className="text-ink-muted font-mono text-xs font-medium tracking-[0.14em]">
          {idx}
        </span>
        <h3 className="text-ink text-lg font-medium md:text-xl">{title}</h3>
      </div>

      <span className="text-ink-muted hidden font-mono text-[11px] font-medium tracking-[0.14em] md:inline md:justify-self-start">
        {tag}
      </span>

      <InlineLinks links={links} />

      <ArrowIcon
        size={14}
        strokeWidth={1.75}
        className="text-ink hidden md:block md:justify-self-end"
      />
    </div>
  );
}
