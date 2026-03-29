import { GenericElement } from "../common/generic.type";
import { ElementDto } from "../common/element.type";

// ──────────────────────────────────────────────
// Judge Association Histories
// ──────────────────────────────────────────────

export type JudgesAssociationHistories = {
    readonly totalCertifiedJudges: string;
    readonly totalYearOfServices: string;
    readonly totalAnnualWorkshops: string;
    readonly totalRegionalChapters: string;
};

// ──────────────────────────────────────────────
// API data wrapper (inside `data`)
// ──────────────────────────────────────────────

export type JudgeAssociationHistoriesWrapperDto = {
    readonly elementDtos: ElementDto[];
    readonly pageGenericElements: GenericElement;
    readonly pageJudgesAssociationHistories: JudgesAssociationHistories;
};