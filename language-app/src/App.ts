import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/home';
import BaseComponent from './components';

export default function App(): HTMLElement {
  return BaseComponent({
    className: 'app',
    children: [Header(), Home(), Footer()],
  });
}
