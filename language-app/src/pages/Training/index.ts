import BaseComponent from '@/components';

export default function Training(): HTMLElement {
  return BaseComponent({
    tag: 'section',
    className: 'training',
    text: 'Training page',
  });
}
