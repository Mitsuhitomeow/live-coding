import { z } from 'zod';
import type { wordSchema } from '../schemas/words.schema';

export type WordLevel = 'A1' | 'A2' | 'B1';

export type WordCategory =
  'greetings' | 'food' | 'home' | 'transport' | 'shopping' | 'people' | 'verbs';

export type Word = z.infer<typeof wordSchema>;
