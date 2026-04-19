import type { Section, Work } from "./types";

const skills: Work[] = [
  {
    id: "cpp",
    title: "C / C++",
    tag: "LANGUAGE",
    description:
      "Systems, graphics and game programming. My default for engines and low-level tools.",
    cover: { from: "#B8451F", to: "#1A1A1A" },
    links: {
      notes: "https://qiekn.notion.site/cpp/",
      github: "https://github.com/qiekn/cppp/",
    },
  },
  {
    id: "rust",
    title: "Rust",
    tag: "LANGUAGE",
    description:
      "Memory safety without GC. Using it for CLI tools, experiments and OS-ish tinkering.",
    cover: { from: "#E5702A", to: "#3D1F10" },
    links: {
      notes: "https://qiekn.notion.site/rust",
      github: "https://github.com/qiekn/rustp",
      videos: "https://www.bilibili.com/video/BV1p2XsBkEfe",
    },
  },
  {
    id: "lua",
    title: "Lua",
    tag: "LANGUAGE · SCRIPTING",
    description:
      "Lightweight embedding — game scripting, Neovim config, and tiny DSLs.",
    cover: { from: "#2E4F9E", to: "#0F1B3D" },
    links: {
      notes: "https://qiekn.notion.site/lua",
    },
  },
];

const courses: Work[] = [
  {
    id: "cmu-15-445",
    title: "CMU 15-445",
    tag: "DATABASES",
    description:
      "Database systems. Storage, indexing, query execution, concurrency, recovery.",
    cover: { from: "#7A1F3D", to: "#1A1A1A" },
    links: {
      notes: "https://qiekn.notion.site/cmu-15-445",
      github: "https://github.com/qiekn/bustub-fall2024",
    },
  },
  {
    id: "csapp",
    title: "CSAPP",
    tag: "SYSTEMS · LOW-LEVEL",
    description:
      "Computer Systems: A Programmer's Perspective. Bits, assembly, memory, linking, concurrency.",
    cover: { from: "#2B3A55", to: "#0F1420" },
    links: {
      notes: "https://qiekn.notion.site/csapp",
      github: "https://github.com/qiekn/csapp",
      videos: "https://www.bilibili.com/video/BV1hXSDBXEv1",
    },
  },
  {
    id: "games101",
    title: "Games 101",
    tag: "GRAPHICS",
    description:
      "Intro to computer graphics. Rasterization, ray tracing, shading, transforms, animation.",
    cover: { from: "#1E5E5F", to: "#0E1F20" },
    links: {
      notes: "https://qiekn.notion.site/games101",
      github: "https://github.com/qiekn/games101",
    },
  },
  {
    id: "games202",
    title: "Games 202",
    tag: "GRAPHICS",
    description:
      "Real-time high-quality rendering. Shadows, global illumination, PBR, denoising.",
    cover: { from: "#4A2C6E", to: "#14091F" },
    links: {
      notes: "https://qiekn.notion.site/games202",
      github: "https://github.com/qiekn/games202",
      videos: "https://www.bilibili.com/video/BV13qAPzsEJV",
    },
  },
  {
    id: "games104",
    title: "Games 104",
    tag: "ENGINE · ARCHITECTURE",
    description:
      "Modern game engine architecture. Pipeline, scene, rendering, physics, networking.",
    cover: { from: "#B8451F", to: "#2B0F05" },
    links: {},
  },
  {
    id: "mit-6828",
    title: "MIT 6.828",
    tag: "XV6 · OS · KERNEL",
    description:
      "Operating systems engineering. Building xv6 — a tiny Unix-like kernel from scratch.",
    cover: { from: "#2F4A2B", to: "#0E1608" },
    links: {
      notes: "https://qiekn.notion.site/xv6-fall2025",
      github: "https://github.com/qiekn/xv6-fall2025",
      videos: "https://www.bilibili.com/video/BV1jPwQzbETb",
    },
  },
  {
    id: "cs144",
    title: "Stanford CS144",
    tag: "NETWORKS · TCP/IP",
    description:
      "Introduction to computer networking. Building a TCP stack end-to-end in C++.",
    cover: { from: "#1E3A8A", to: "#0A1026" },
    links: {},
  },
  {
    id: "learn-opengl",
    title: "LearnOpenGL",
    tag: "GRAPHICS · OPENGL",
    description:
      "Core + modern OpenGL. Textures, lighting, shaders, framebuffers, advanced rendering.",
    cover: { from: "#0E7490", to: "#082026" },
    links: {
      notes: "https://qiekn.notion.site/opengl",
      github: "https://github.com/qiekn/opengl-notes",
      videos: "https://www.bilibili.com/video/BV1HmPKzJEBt",
    },
  },
  {
    id: "vulkan-2026",
    title: "How to Vulkan 2026",
    tag: "GRAPHICS · VULKAN",
    description:
      "Modern Vulkan: bindless, dynamic rendering, GPU-driven pipelines, mesh shading.",
    cover: { from: "#7E2C2C", to: "#1C0808" },
    links: {},
  },
  {
    id: "khronos-vulkan",
    title: "Khronos Vulkan® Tutorial",
    tag: "GRAPHICS · Vulkan",
    description:
      "The official Khronos Vulkan tutorial. Swapchain, pipeline, descriptors, render pass.",
    cover: { from: "#5B1F5B", to: "#180818" },
    links: {
      notes: "https://qiekn.notion.site/vulkan",
      github: "https://github.com/qiekn/vulkan",
      videos: "https://www.bilibili.com/video/BV1zhPUzcEtb",
    },
  },
];

const projects: Work[] = [
  {
    id: "ck-engine",
    title: "ck-engine",
    tag: "GAME ENGINE · OPENGL",
    description:
      "A lightweight 2D game engine in C++ / OpenGL. Scene, sprite batching, input, editor tooling.",
    cover: { from: "#B8451F", to: "#1A1A1A" },
    links: {
      notes: "https://qiekn.notion.site/ck-engine",
      github: "https://github.com/qiekn/ck-engine",
      videos: "https://www.bilibili.com/video/BV1xffbBkEb9",
    },
  },
  {
    id: "dg-lab",
    title: "DG-Lab Controller",
    tag: "HARDWARE · BLE",
    description:
      "Desktop controller for the DG-Lab device. Bluetooth LE, custom wave patterns, live tuning.",
    cover: { from: "#1E3A8A", to: "#0A1026" },
    links: {
      notes: "https://qiekn.notion.site/dg-lab",
      videos: "https://space.bilibili.com/285421540/lists/7755912?type=season",
    },
  },
  {
    id: "nzm-wiki",
    title: "逆战未来 Wiki",
    tag: "WEB · WIKI",
    description:
      "A community wiki for the game 逆战未来 — searchable databases, guides, lore.",
    cover: { from: "#2F4A2B", to: "#0E1608" },
    links: {
      notes: "https://qiekn.notion.site/nzm-wiki",
      github: "https://github.com/qiekn/nzm-wiki",
      website: "https://nzm-wiki.pages.dev",
    },
  },
  {
    id: "nzm-soundtrack",
    title: "逆战未来 Soundtrack",
    tag: "WEB · MUSIC PLAYER",
    description:
      "Online music player for the 逆战未来 soundtrack. Playlist, waveform, share links.",
    cover: { from: "#5B1F5B", to: "#180818" },
    links: {
      notes: "https://qiekn.notion.site/nzm-ost",
      github: "https://github.com/qiekn/nzm-ost",
      website: "https://nzm-ost.pages.dev",
    },
  },
];

export const sections: Section[] = [
  {
    id: "fundamentals",
    number: "01",
    description: "What I'm good at",
    title: "Fundamentals",
    cols: 3,
    works: skills,
  },
  {
    id: "courses",
    number: "02",
    description: "What I've learned",
    title: "Open Courses",
    cols: 3,
    works: courses,
  },
  {
    id: "projects",
    number: "03",
    description: "What I've Built",
    title: "Projects",
    cols: 2,
    works: projects,
  },
];
