import BaseComponents from '../../components/base-components';
import Header from '../../components/Header';
import WorldsList from './words-list/words-list';
import Footer from '../../components/Footer';

export default function Home(): HTMLElement {
  return BaseComponents({
    tag: 'div',
    className: 'home',
    children: [Header(), WorldsList(), Footer()],
  });
}
