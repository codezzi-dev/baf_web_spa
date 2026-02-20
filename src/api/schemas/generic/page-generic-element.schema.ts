import z from "zod";

export const PageGenericElementSchema = z.object({
    pageTopTag: z.string().nullable().optional(),
    pageTopTitle: z.string().nullable().optional(),
    pageTopSummary: z.string().nullable().optional(),
    pageBottomTitle: z.string().nullable().optional(),
    pageBottomSummary: z.string().nullable().optional(),
    pageBottomTags: z.string().nullable().optional(),
});

export type PageGenericElement = z.infer<typeof PageGenericElementSchema>;