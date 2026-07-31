import BaseComponent from '@/components/BaseComponent';
import type { Word } from '@/types/word.types';

export default function Card(props: Word): HTMLElement {
  return BaseComponent({
    tag: 'span',
    className: `word word-${props.id}`,
    text: `${props.cyrillic} - ${props.translation}`,
  });
}
