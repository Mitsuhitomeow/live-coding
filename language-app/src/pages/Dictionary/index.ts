import BaseComponent from '@/components/BaseComponent';
import WordsList from '@/pages/Dictionary/words-list';

export default function Dictionary(): HTMLElement {
  return BaseComponent({
    className: 'main-dictionary',
    children: [
      BaseComponent({
        tag: 'h3',
        className: 'dictionary-title',
        text: 'Dictionary page',
      }),
      WordsList(),
    ],
  });
}
