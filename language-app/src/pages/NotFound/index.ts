import BaseComponent from '@/components';

export default function NotFound(): HTMLElement {
  return BaseComponent({
    tag: 'section',
    className: 'not-found',
    text: '404',
  });
}
