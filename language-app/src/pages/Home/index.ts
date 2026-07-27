import BaseComponents from '@/components/';
import WorldsList from '@/pages/Home/words-list';

export default function Home(): HTMLElement {
  return BaseComponents({
    tag: 'div',
    className: 'home',
    children: [WorldsList()],
  });
}
