import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BaseComponent from './components';
import Dictionary from './pages/Dictionary';
import Training from './pages/Training';
import NotFound from './pages/NotFound';

export default function App(): HTMLElement {
  return BaseComponent({
    className: 'container',
    children: [
      Header(),
      Home(),
      Dictionary(),
      Training(),
      NotFound(),
      Footer(),
    ],
  });
}
