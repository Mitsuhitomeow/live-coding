import BaseComponents from '@/components/BaseComponent';

export default function Home(): HTMLElement {
  return BaseComponents({
    tag: 'main',
    className: 'main',
    children: [
      BaseComponents({
        tag: 'h3',
        className: 'main-title',
        text: 'Home',
      }),
    ],
  });
}
