import App from '@/App';
import render from '@/router/render';

const root = document.getElementById('app');

if (!root) {
  throw new Error('Root element not found');
}

root.append(App());

render();
