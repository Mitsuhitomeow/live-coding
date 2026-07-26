import BaseComponents from '../../../components/base-components';
import { getWords } from '../../../services/words.services';
import Card from '../word-cards/word-card';

export default function WordsList(): HTMLElement {
  const cards = getWords().map(Card);

  return BaseComponents({
    tag: 'section',
    className: 'words-list',
    children: cards,
  });
}
