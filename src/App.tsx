import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { TopBar } from "@/components/TopBar";
import { ViewControls } from "@/components/ViewControls";
import { sections } from "@/data/works";
import type { ViewMode } from "@/data/types";

const VIEW_STORAGE_KEY = "qiekn:view-mode";

function readInitialView(): ViewMode {
  if (typeof window === "undefined") return "list";
  const stored = window.localStorage.getItem(VIEW_STORAGE_KEY);
  return stored === "grid" ? "grid" : "list";
}

function App() {
  const [view, setView] = useState<ViewMode>(readInitialView);

  useEffect(() => {
    window.localStorage.setItem(VIEW_STORAGE_KEY, view);
  }, [view]);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 pt-10 pb-16 md:gap-6 md:px-12 md:pt-10 md:pb-18 lg:gap-6 lg:px-16 lg:pt-10 lg:pb-20">
        <TopBar />
        <Hero />
        <ViewControls value={view} onChange={setView} />
        {sections.map((section) => (
          <Section key={section.id} section={section} view={view} />
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default App;
