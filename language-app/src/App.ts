import Home from './pages/Home/Home';
import BaseComponents from './components/base-components';

type App = () => HTMLElement;

const App = () => {
  const app = BaseComponents({
    className: 'app',
    children: [Home()],
  });

  return document.body.appendChild(app);
};

App();
