// src/types/navigation.ts
import { ReactNode } from "react";

export interface MegamenuLink {
  name: string;
  href: string;
}

export interface MegamenuSection {
  title: string;
  links?: MegamenuLink[];
  content?: ReactNode;
}

export interface MegamenuContentItem {
  sections: MegamenuSection[];
}

export interface MegamenuContent {
  [key: string]: MegamenuContentItem;
}

export interface MenuItem {
  name: string;
  href: string;
  hasMegamenu?: boolean;
  key: string;
}

export type NavigationLevel = "main" | "sections" | "links";