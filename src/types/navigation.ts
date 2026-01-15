// Type definitions
export interface MenuItem {
  name: string;
  href: string;
  hasMegamenu?: boolean;
}

export interface MegamenuLink {
  name: string;
  href: string;
}

export interface MegamenuSection {
  title: string;
  links?: MegamenuLink[];
  content?: React.ReactNode;
}

export interface MegamenuContentItem {
  sections: MegamenuSection[];
}

export interface MegamenuContent {
  [key: string]: MegamenuContentItem;
}

export type NavigationLevel = "main" | "sections" | "links";