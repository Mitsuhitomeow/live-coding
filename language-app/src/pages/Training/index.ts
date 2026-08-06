import BaseComponent from '@/components/BaseComponent';

export default function Training(): HTMLElement {
  return BaseComponent({
    className: 'main-container',
    children: [
      BaseComponent({
        tag: 'h3',
        className: 'main-text',
        text: 'Training',
      }),
    ],
  });
}
