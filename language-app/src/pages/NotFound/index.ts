import BaseComponent from '@/components/BaseComponent';

export default function NotFound(): HTMLElement {
  return BaseComponent({
    tag: 'section',
    className: 'not-found',
    text: '404',
  });
}
