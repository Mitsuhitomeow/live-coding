import BaseComponents from '@/components/';
import { getWords } from '@/services/words.services';
import Card from '@/pages/Home/word-cards';

export default function WordsList(): HTMLElement {
  const cards = getWords().map(Card);

  return BaseComponents({
    tag: 'section',
    className: 'words-list',
    children: cards,
  });
}
