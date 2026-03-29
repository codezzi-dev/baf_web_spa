import { GenericElement } from "../common/generic.type";
import { ElementDto } from "../common/element.type";

// ──────────────────────────────────────────────
// Coach Association Histories
// ──────────────────────────────────────────────

export type CoachAssociationHistories = {
    readonly totalCertifiedCoaches: string;
    readonly totalYearOfServices: string;
    readonly totalAnnualWorkshops: string;
    readonly totalRegionalChapters: string;
};

// ──────────────────────────────────────────────
// API data wrapper (inside `data`)
// ──────────────────────────────────────────────

export type CoachAssociationHistoriesWrapperDto = {
    readonly elementDtos: ElementDto[];
    readonly pageGenericElements: GenericElement;
    readonly pageCoachAssociationHistories: CoachAssociationHistories;
};