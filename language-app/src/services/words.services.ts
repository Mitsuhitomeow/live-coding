import words from '@/data/word.json';
import { wordsSchema } from '@/schemas/words.schema';
import type { Word } from '@/types/word.types';

const wordsData: Word[] = wordsSchema.parse(words);

export function getWords(): Word[] {
  return wordsData;
}

export function getWordByCategory(category: string): Word[] {
  return wordsData.filter((word) => word.category === category);
}
