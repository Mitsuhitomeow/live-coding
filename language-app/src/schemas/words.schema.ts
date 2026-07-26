import { z } from 'zod';

export const wordSchema = z.object({
  id: z.number(),

  latin: z.string(),

  cyrillic: z.string(),

  translation: z.string(),

  pronunciation: z.string().optional(),

  category: z.string(),

  level: z.enum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']),
});

export const wordsSchema = z.array(wordSchema);
