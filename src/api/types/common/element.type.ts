// ──────────────────────────────────────────────
// Step (inside a step)
// ──────────────────────────────────────────────
export type stepItemFromDto = {
    stepItemId: number;
    stepItemName: string;
    stepItemOrder: number;
};
// ──────────────────────────────────────────────
// Step (inside a group)
// ──────────────────────────────────────────────
export type StepFromDto = {
    stepId: number;
    stepTitle: string;
    stepDescription: string;
    stepIcon: string | null;
    stepTags: string[] | null;
    stepOrder: number;
    stepItemFromDtos: stepItemFromDto[];
};
// ──────────────────────────────────────────────
// Step group
// ──────────────────────────────────────────────

export type ElementDto = {
    readonly stepGroupId: number;
    readonly stepGroupKey: string;
    readonly stepGroupName: string;
    readonly stepGroupOrder: number;
    readonly stepGroupTitle: string;
    readonly stepGroupSummary: string;
    readonly stepFromDtos: StepFromDto[];
};