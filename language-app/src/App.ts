import Home from './pages/Home/home';
import BaseComponent from './components/base-components';

export default function App(): HTMLElement {
  const app = BaseComponent({
    className: 'app',
    children: [Home()],
  });

  return document.body.appendChild(app);
}

App();
