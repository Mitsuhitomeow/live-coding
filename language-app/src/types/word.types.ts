export type WordLevel = 'A1' | 'A2' | 'B1';

export type WordCategory =
  'greetings' | 'food' | 'home' | 'transport' | 'shopping' | 'people' | 'verbs';

export type Word = {
  id: number;

  latin: string;
  cyrillic: string;

  translation: string;

  pronunciation?: string;

  example?: {
    latin: string;
    cyrillic: string;
    translation: string;
  };

  category: WordCategory;

  level: WordLevel;
};
