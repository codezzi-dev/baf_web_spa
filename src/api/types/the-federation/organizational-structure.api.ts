import { KeyValue } from "@/api/schemas/generic/key-value.schema";
import { GenericElement } from "../common/generic.type";




// ──────────────────────────────────────────────
// info sections
// ──────────────────────────────────────────────

export type CommitteeWithMembers = {
    readonly memberUniqueId: string;
    readonly memberId: string;
    readonly memberName: string;
    readonly memberIntro: string;
    readonly memberDesignationId: string;
    readonly memberEmail: string;
    readonly memberContactNo: string;
    readonly memberImgUrl: string;
    readonly memberActiveStatus: string;
    readonly achievements: string[];
    readonly designationTitle: string;
    readonly committeeId: number;
    readonly committeeMemberActiveStatus: number;
    readonly committeeMemberOrderId: number;
    readonly committeeName: string;
    readonly committeeDescription: string;
};

// ──────────────────────────────────────────────
// API data wrapper (inside `data`)
// ──────────────────────────────────────────────

export type OrganizationalStructureWrapperDto = {
    readonly committees: KeyValue[];
    readonly committeeWithMembers: CommitteeWithMembers[];
    readonly pageGenericElements: GenericElement;
};