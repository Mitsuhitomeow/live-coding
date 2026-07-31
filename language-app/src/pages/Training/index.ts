import BaseComponent from '@/components/BaseComponent';

export default function Training(): HTMLElement {
  return BaseComponent({
    tag: 'main',
    className: 'main',
    children: [
      BaseComponent({
        tag: 'h3',
        className: 'main-text',
        text: 'Training',
      }),
    ],
  });
}
