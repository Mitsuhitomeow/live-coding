import BaseComponents from '@/components/BaseComponent';

export default function Home(): HTMLElement {
  return BaseComponents({
    className: 'main-container',
    children: [
      BaseComponents({
        tag: 'h3',
        className: 'main-title',
        text: 'Home',
      }),
    ],
  });
}
