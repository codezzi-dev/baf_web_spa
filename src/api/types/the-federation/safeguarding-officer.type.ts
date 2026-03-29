import { GenericElement } from "../common/generic.type";
import { ElementDto } from "../common/element.type";

// ──────────────────────────────────────────────
// Safeguarding Officer
// ──────────────────────────────────────────────

export type SafeguardingOfficer = {
    readonly safeguardingOfficerName: string;
    readonly safeguardingOfficerDesignation: string;
    readonly safeguardingOfficerDescription: string;
    readonly safeguardingOfficerPhone: string;
    readonly safeguardingOfficerEmail: string;
    readonly safeguardingOfficerSupport: string;
};

// ──────────────────────────────────────────────
// Safeguarding Resources
// ──────────────────────────────────────────────

export type SafeguardingResources = {
    readonly documentId: number;
    readonly documentName: string;
    readonly documentType: string;
    readonly documentUrl: string;
};

// ──────────────────────────────────────────────
// API data wrapper (inside `data`)
// ──────────────────────────────────────────────

export type SafeguardingOfficerWrapperDto = {
    readonly elementDtos: ElementDto[];
    readonly pageGenericElements: GenericElement;
    readonly pageSafeguardingOfficerDto: SafeguardingOfficer;
    readonly safeguardingResources: SafeguardingResources[];

};