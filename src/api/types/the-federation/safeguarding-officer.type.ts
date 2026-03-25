import { GenericElement } from "../common/generic.type";

// ──────────────────────────────────────────────
// Safeguarding Officer content sections
// ──────────────────────────────────────────────



export type SafeguardingOfficer = {
    readonly safeguardingOfficerName: string;
    readonly safeguardingOfficerDesignation: string;
    readonly safeguardingOfficerDescription: string;
    readonly safeguardingOfficerPhone: string;
    readonly safeguardingOfficerEmail: string;
    readonly safeguardingOfficerSupport: string;
}

// ──────────────────────────────────────────────
// API data wrapper (inside `data`)
// ──────────────────────────────────────────────

export type SafeguardingOfficerWrapperDto = {
    readonly pageSafeguardingOfficerDto: SafeguardingOfficer;
    readonly pageGenericElements: GenericElement;
};