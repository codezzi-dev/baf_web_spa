// ──────────────────────────────────────────────
// Notice
// ──────────────────────────────────────────────

export type Notice = {
    readonly message: string;
    readonly icon: string;
    readonly isNew: boolean;
    readonly displayOrder: number;
};

// ──────────────────────────────────────────────
// Step Item
// ──────────────────────────────────────────────

export type StepItem = {
    // extend when stepItemFromDtos shape is known
};

// ──────────────────────────────────────────────
// Step (inside a StepGroup)
// ──────────────────────────────────────────────

export type Step = {
    readonly stepId: number;
    readonly stepTitle: string;
    readonly stepDescription: string;
    readonly stepIcon: string;
    readonly stepTags: string;
    readonly stepOrder: number;
    readonly stepItemFromDtos: StepItem[];
};

// ──────────────────────────────────────────────
// Step Group (elements array)
// ──────────────────────────────────────────────

export type StepGroup = {
    readonly stepGroupId: number;
    readonly stepGroupKey: string;
    readonly stepGroupName: string;
    readonly stepGroupOrder: number;
    readonly stepGroupTitle: string;
    readonly stepGroupSummary: string;
    readonly stepFromDtos: Step[];
};

// ──────────────────────────────────────────────
// News & Announcements
// ──────────────────────────────────────────────

export type NewsAnnouncement = {
    readonly newsId: number;
    readonly newsCategoryId: number;
    readonly newsTitle: string;
    readonly newsShortContent: string;
    readonly newsContent: string;
    readonly newsTag: string;
    readonly newsAuthorName: string;
    readonly newsImageUrl: string;
    readonly newsThumbnailImageUrl: string;
    readonly newsPublishDate: string;
    readonly newsExpiryDate: string;
    readonly newsIsFeatured: boolean;
    readonly newsIsPinned: boolean;
    readonly newsIsActive: boolean;
};

// ──────────────────────────────────────────────
// Athlete
// ──────────────────────────────────────────────

export type Athlete = {
    readonly athleteUniqueId: string;
    readonly athleteFullName: string;
    readonly athleteShortBio: string | null;
    readonly athleteTotalGoldMedals: number;
    readonly athleteTotalSilverMedals: number;
    readonly athleteTotalBronzeMedals: number;
    readonly athleteTotalCompetitions: number;
    readonly athleteWorldRanking: number | null;
    readonly athleteCareerStartYear: number | null;
    readonly athleteBestPerformanceValue: number | null;
    readonly athleteBestPerformanceType: string | null;
    readonly athleteProfileImageUrl: string | null;
    readonly athleteStatus: number;
};
export type Event = {
    readonly EventUniqueId: string;
    readonly EventTitle: string;
    readonly EventShortDescription: string;
    readonly EventLevel: string;
    readonly EventCategory: string;
    readonly EventStartDate: string;
    readonly EventEndDate: string;
    readonly EventRegOpenDate: string;
    readonly EventRegCloseDate: string;
    readonly EventLocation: string;
    readonly EventSlug: string;

};

// ──────────────────────────────────────────────
// API data wrapper (inside `data`)
// ──────────────────────────────────────────────

export type HomePageWrapperDto = {
    readonly notice: Notice[];
    readonly elements: StepGroup[];
    readonly newsAnnouncements: NewsAnnouncement[];
    readonly events: Event[];
    readonly athletes: Athlete[];
};