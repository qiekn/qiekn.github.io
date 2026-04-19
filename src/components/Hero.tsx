import { BilibiliIcon, GithubIcon, MailIcon, NotionIcon } from "./icons";

const contactLinks = [
  {
    href: "https://github.com/qiekn",
    label: "Github",
    Icon: GithubIcon,
  },
  {
    href: "https://qiekn.notion.site",
    label: "Blogs",
    Icon: NotionIcon,
  },
  {
    href: "https://space.bilibili.com/285421540",
    label: "Videos",
    Icon: BilibiliIcon,
  },
  {
    href: "mailto:qiekndev@gmail.com",
    label: "Mail",
    Icon: MailIcon,
  },
] as const;

export function Hero() {
  return (
    <section className="border-line flex flex-col gap-4 border-b pb-6">
      <div className="flex flex-col gap-2.5">
        <h1 className="text-ink max-w-5xl text-4xl leading-[1.1] font-semibold md:text-5xl lg:text-6xl">
          yaoyao_qiekn
        </h1>
        <span className="text-ink-muted font-mono text-xs font-medium tracking-[0.15em] pl-[0.1em]">
          This name is short for → yo yo! check it out / 药药 切克闹
        </span>
      </div>

      {/*
      <p className="text-ink-muted max-w-3xl text-base leading-relaxed md:text-lg">
        A collection of what I'm studying and making. Programming languages,
        computer graphics, game engines — with notes, source, and the occasional
        video walkthrough.
      </p>
      */}

      <ul className="flex flex-wrap items-center gap-x-7 gap-y-2 pt-2">
        {contactLinks.map(({ href, label, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              className="text-ink hover:text-accent-rust inline-flex items-center gap-2 font-mono text-sm font-medium transition-colors"
            >
              <Icon size={16} strokeWidth={1.75} />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
