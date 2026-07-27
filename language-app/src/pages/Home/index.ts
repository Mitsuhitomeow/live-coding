import BaseComponents from '@/components/';
import WorldsList from '@/pages/Home/words-list';

export default function Home(): HTMLElement {
  return BaseComponents({
    tag: 'main',
    className: 'home',
    children: [WorldsList()],
    attributes: {
      id: 'outlet',
    },
  });
}
