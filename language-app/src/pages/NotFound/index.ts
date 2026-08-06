import BaseComponent from '@/components/BaseComponent';

export default function NotFound(): HTMLElement {
  return BaseComponent({
    className: 'main-container',
    children: [
      BaseComponent({
        tag: 'h3',
        className: 'not-found__text',
        text: '404',
      }),
    ],
  });
}
