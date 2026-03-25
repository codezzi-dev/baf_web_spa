// schemas/message-from-president.schema.ts

import { z } from 'zod';
import { PageGenericElementSchema } from '../generic/page-generic-element.schema';

export const MessageFromPresidentSchema = z.object({
    messageFromPresidentName: z.string().nullable().optional(),
    messageFromPresidentTitle: z.string().nullable().optional(),
    messageFromPresidentDescription: z.string().nullable().optional(),
    messageFromPresidentTags: z.string().nullable().optional(),
    messageFromPresidentIcon: z.string().nullable().optional(),
    messageFromPresidentSection1: z.string().nullable().optional(),
    messageFromPresidentSection2: z.string().nullable().optional(),
    messageFromPresidentSection3: z.string().nullable().optional(),
    messageFromPresidentContentTitle: z.string().nullable().optional(),
    messageFromPresidentContentDescription: z.string().nullable().optional(),
});

// ──────────────────────────────────────────────
// Main Wrapper Schema (what the API actually returns)
// ──────────────────────────────────────────────

export const MessageFromPresidentWrapperSchema = z.object({
    pageMessageFromPresidentDto: MessageFromPresidentSchema.nullable().optional(),
    pageGenericElements: PageGenericElementSchema.nullable().optional(),
    elementSteps: z.array(z.unknown()).nullable().optional(),
});

// ──────────────────────────────────────────────
// Type inference (for use in your components/hooks)
// ──────────────────────────────────────────────

export type MessageFromPresident = z.infer<typeof MessageFromPresidentSchema>;
export type MessageFromPresidentWrapper = z.infer<typeof MessageFromPresidentWrapperSchema>;

// Most common usage type:
export type MessageFromPresidentApiResponse = MessageFromPresidentWrapper;