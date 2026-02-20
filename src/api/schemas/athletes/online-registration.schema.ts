import { z } from "zod";

// ──────────────────────────────────────────────
// Athlete General Data (Required Version)
// ──────────────────────────────────────────────

export const AthleteGenDataSchema = z.object({
    athleteFirstName: z.string().min(1, "First name is required"),
    athleteLastName: z.string().min(1, "Last name is required"),
    athleteFatherName: z.string().min(1, "Father name is required"),
    athleteMotherName: z.string().min(1, "Mother name is required"),

    athleteEmail: z.string().email("Invalid email"),

    athleteContactNo: z.string().min(5, "Contact number is required"),

    athleteDob: z.string().datetime(),

    athleteGender: z.enum(["M", "F", "O"]),

    athleteAlternateContactNo: z.string().optional(),

    athleteHeight: z.number().positive().optional(),
    athleteWeight: z.number().positive().optional(),

    athleteBloodGroup: z.string().optional(),

    athleteIdentityType: z.number().int(),

    athleteIdentificationNumber: z.string().min(1),

    instituteId: z.number().int(),
});


// ──────────────────────────────────────────────
// Athlete Identity Data
// ──────────────────────────────────────────────

export const AthleteIdentityDataSchema = z.object({
    athleteIdentityDocRelatedId: z.string().min(1),
    athleteIdentityDocsUrl: z.array(z.string().url()).min(1),
    athleteIdentityDocCategoryId: z.number().int(),
});


// ──────────────────────────────────────────────
// Athlete Core Data (Bengali)
// ──────────────────────────────────────────────

export const AthleteCoreDataInBengaliSchema = z.object({
    athleteFullNameInBengali: z.string().min(1),
    athleteFatherNameInBengali: z.string().min(1),
    athleteMotherNameInBengali: z.string().min(1),
});


// ──────────────────────────────────────────────
// Athlete Address
// ──────────────────────────────────────────────

export const AthleteAddressSchema = z.object({
    athleteAddressDistrictId: z.number().int(),
    athleteAddressSubDistrictId: z.number().int(),
    athleteAddressPostalCode: z.number().int(),
    athleteAddressArea: z.string().min(1),
    athleteAddressType: z.number().int(),
});


// ──────────────────────────────────────────────
// Athlete Documents
// ──────────────────────────────────────────────

export const AthleteDocumentSchema = z.object({
    athleteDocName: z.string().min(1),
    athleteDocRelatedId: z.string().min(1),
    athleteDocPhysicalPathUrl: z.string().url(),
    docCategoryId: z.number().int(),
});
;

// ──────────────────────────────────────────────
// Main Wrapper Schema (API Response)
// ──────────────────────────────────────────────

export const CreateAthleteSchema = z.object({
    athleteGenData: AthleteGenDataSchema,
    athleteIdentityData: AthleteIdentityDataSchema,
    athleteCoreDataInBengali: AthleteCoreDataInBengaliSchema,
    athleteAddresses: z.array(AthleteAddressSchema).min(1),
    athleteDocuments: z.array(AthleteDocumentSchema).optional(),
});


// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────

export type CreateAthleteRequest = z.infer<typeof CreateAthleteSchema>;

