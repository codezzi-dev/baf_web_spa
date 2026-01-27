import { GenericElement } from "../common/generic.type";

// ──────────────────────────────────────────────
// Mission/Vision: Item under a step (bullet/list)
// ──────────────────────────────────────────────
export type MissionVisionStepItem = {
  readonly stepItemId: number;    
  readonly stepItemName: string;
  readonly stepItemOrder?: number;  
};

// ──────────────────────────────────────────────
// Mission/Vision: Step inside a group
// ──────────────────────────────────────────────
export type MissionVisionStep = {
  readonly stepId: number;         
  readonly stepTitle?: string;
  readonly stepDescription?: string;
  readonly stepIcon?: string;
  readonly stepTags?: string;
  readonly stepOrder?: number;       
  readonly elementStepItems?: MissionVisionStepItem[];
};

// ──────────────────────────────────────────────
// Mission/Vision: Group (Mission, Vision, Values, etc.)
// ──────────────────────────────────────────────
export type MissionVisionStepGroup = {
  readonly stepGroupId: number;    
  readonly stepGroupTitle?: string;
  readonly stepGroupSummary?: string;
  readonly stepGroupOrder?: number;  
  readonly elementSteps?: MissionVisionStep[];
};

// ──────────────────────────────────────────────
// API wrapper (same as C# MissionVisionContentWrapperDto)
// ──────────────────────────────────────────────
export type MissionVisionContentWrapperDto = {
  readonly elementStepGroups?: MissionVisionStepGroup[];
  readonly pageGenericElements?: GenericElement;
};