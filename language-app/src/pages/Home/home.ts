import BaseComponents from '../../components/base-components';
import Header from '../../components/Header';
import WorldsList from './words-list/words-list';

export default function Home(): HTMLElement {
  const home = BaseComponents({
    tag: 'div',
    className: 'home',
    children: [Header(), WorldsList()],
  });

  return home;
}
