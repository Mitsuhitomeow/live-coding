import BaseComponent from '@/components/BaseComponent';

export default function Training(): HTMLElement {
  return BaseComponent({
    tag: 'section',
    className: 'training',
    text: 'Training page',
  });
}
