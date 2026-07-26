import BaseComponent from '@/components';
import type { Word } from '@/types/word.types';

export default function Card(props: Word): HTMLElement {
  return BaseComponent({
    tag: 'article',
    className: 'card',
    text: props.cyrillic,
  });
}
