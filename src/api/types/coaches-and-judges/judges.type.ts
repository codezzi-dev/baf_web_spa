import { GenericElement } from "../common/generic.type";
import { ElementDto } from "../common/element.type";
import { KeyValue } from "@/api/schemas/generic/key-value.schema";

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
// Judges 
// ──────────────────────────────────────────────

export type Judge = {
    readonly coachId: number;
    readonly coachCategoryId: number;
    readonly coachDivitionId: number;
    readonly coachDistrictId: number;
    readonly coacheFullName: string;
    readonly coacheSpecialization: string;
    readonly coacheBiography: string;
    readonly coacheEmail: string;
    readonly coachePhone: string;
    readonly coacheAddress: string;
    readonly coacheCurrentOrganization: string;
    readonly coacheYearsOfExperience: number;
    readonly coacheProfileImageUrl: string;
    readonly totalAthletes: number;
    readonly totalMedals: number;
    readonly coacheAchieventsInJson: string | null;
    readonly coacheCertificationsInJson: string | null;
    readonly coacheAdditionalQualificationsInJson: string | null;
    readonly coacheLanguageInJson: string | null;
    readonly status: number;
    readonly languageId: number;
};
// ──────────────────────────────────────────────
// API data wrapper (inside `data`)
// ──────────────────────────────────────────────

export type JudgeAssociationHistoriesWrapperDto = {
    readonly elementDtos: ElementDto[];
    readonly pageGenericElements: GenericElement;
    readonly pageJudgesAssociationHistories: JudgesAssociationHistories;
};

export type QualifiedJudgesCatagoriesWrapperDto = {
    readonly pageGenericElements: GenericElement;
    readonly categoryDtos: KeyValue[];
    readonly divisions: KeyValue[];
};
export type QualifiedJudgesWrapperDto = {
    readonly coacheDtos: Judge[];
};