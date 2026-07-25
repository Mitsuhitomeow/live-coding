import BaseComponents from '../../components/base-components';
import Header from '../../components/Header';

export default function Home() {
  const home = BaseComponents({
    tag: 'div',
    className: 'home',
    children: [Header()],
  });

  return home;
}
