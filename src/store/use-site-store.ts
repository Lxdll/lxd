"use client";

import { create } from "zustand";

type SiteMode = "overview" | "projects";

type SiteState = {
  activeMode: SiteMode;
  featuredProject: string;
  setActiveMode: (mode: SiteMode) => void;
  setFeaturedProject: (project: string) => void;
};

export const useSiteStore = create<SiteState>((set) => ({
  activeMode: "overview",
  featuredProject: "personal-site",
  setActiveMode: (activeMode) => set({ activeMode }),
  setFeaturedProject: (featuredProject) => set({ featuredProject }),
}));
