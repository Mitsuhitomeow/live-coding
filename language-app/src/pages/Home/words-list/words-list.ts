import BaseComponents from '../../../components/base-components';
import { wordsSchema } from '../../../schemas/words.schema';
import { getWords } from '../../../services/words.services';

export default function WordsList(): HTMLElement {
  const words = wordsSchema.parse(getWords());

  const cards = words.map((word) => {
    return BaseComponents({
      tag: 'div',
      className: 'word-card',
      text: word.cyrillic,
    });
  });

  return BaseComponents({
    tag: 'section',
    className: 'words-list',
    children: cards,
  });
}
