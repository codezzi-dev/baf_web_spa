import { GenericElement } from "../common/generic.type";

// ──────────────────────────────────────────────
// President info & rich-text content sections
// ──────────────────────────────────────────────

export type MessageFromPresident = {
    readonly messageFromPresidentName: string;
    readonly messageFromPresidentTitle: string;
    readonly messageFromPresidentDescription: string;
    readonly messageFromPresidentTags: string; // comma-separated, e.g. "Tag1,Tag2,Tag3"
    readonly messageFromPresidentIcon: string; // filename, e.g. "image.png"
    readonly messageFromPresidentSection1: string; // raw HTML string
    readonly messageFromPresidentSection2: string; // raw HTML string
    readonly messageFromPresidentSection3: string; // raw HTML string
    readonly messageFromPresidentContentTitle: string;
    readonly messageFromPresidentContentDescription: string;
};

// ──────────────────────────────────────────────
// API data wrapper (inside `data`)
// ──────────────────────────────────────────────

export type MessageFromPresidentWrapperDto = {
    readonly pageMessageFromPresidentDto: MessageFromPresident;
    readonly pageGenericElements: GenericElement;
    readonly elementSteps: unknown[];
};