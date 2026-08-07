import BaseComponents from '@/components/BaseComponent';
import { getWords } from '@/services/words.services';
import Card from '@/pages/Dictionary/word-cards';
import styles from '@/pages/Dictionary/words-list/words-list.module.scss';

export default function WordsList(): HTMLElement {
  const cards = getWords().map(Card);

  return BaseComponents({
    tag: 'section',
    className: styles.wordsList,
    children: cards,
  });
}
