import Header from './components/Header';
import BaseComponents from './components/base-components';

export default function Main() {
  const Main = BaseComponents({
    tag: 'main',
    className: 'main',
    children: [Header()],
  });

  return Main;
}
