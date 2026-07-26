import BaseComponents from '../../components/base-components';
import WorldsList from './words-list/words-list';

export default function Home(): HTMLElement {
  return BaseComponents({
    tag: 'div',
    className: 'home',
    children: [WorldsList()],
  });
}
