import BaseComponent from '@/components/BaseComponent';

export default function Dictionary(): HTMLElement {
  return BaseComponent({
    tag: 'section',
    className: 'dictionary',
    text: 'Dictionary page',
  });
}
