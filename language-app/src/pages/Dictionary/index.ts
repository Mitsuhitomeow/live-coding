import BaseComponent from '@/components';

export default function Dictionary(): HTMLElement {
  return BaseComponent({
    tag: 'section',
    className: 'dictionary',
    text: 'Dictionary page',
  });
}
