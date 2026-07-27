import BaseComponent from '@/components/BaseComponent';

export default function Footer(): HTMLElement {
  return BaseComponent({
    tag: 'footer',
    className: 'footer',
    children: [
      BaseComponent({
        tag: 'span',
        className: 'footer-text',
        text: 'my vibe coding language app 2026',
      }),
    ],
  });
}
