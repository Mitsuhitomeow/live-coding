import words from '../data/word.json';
import type { Word } from '../types/word.types';

const wordsData: Word[] = words as Word[];

export function getWords(): Word[] {
  return wordsData;
}

export function getWordByCategory(category: string): Word[] {
  return wordsData.filter((word) => word.category === category);
}
