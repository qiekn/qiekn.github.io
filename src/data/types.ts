export type ViewMode = "grid" | "list";

export interface WorkLinks {
  notes?: string;
  github?: string;
  website?: string;
  videos?: string;
}

export interface Work {
  id: string;
  title: string;
  tag: string;
  description: string;
  cover: {
    from: string;
    to: string;
  };
  links: WorkLinks;
}

export interface Section {
  id: string;
  number: string;
  description: string;
  title: string;
  cols: 2 | 3;
  works: Work[];
}
