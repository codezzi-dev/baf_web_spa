import z from "zod";

export const KeyValueSchema = z.object({
    key: z.string().nullable().optional(),
    value: z.string().nullable().optional(),
});

export type KeyValue = z.infer<typeof KeyValueSchema>;