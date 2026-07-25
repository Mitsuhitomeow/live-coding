import BaseComponents from './base-components';
import Batton from './common/batton/Batton';

export default function Header() {
  const header = BaseComponents({
    tag: 'header',
    className: 'header',
    children: [
      BaseComponents({ tag: 'span', className: 'header__text', text: `page 1` }),
      BaseComponents({ tag: 'span', className: 'header__text', text: `page 2` }),
      Batton({ className: 'header__button', text: `click me` }),
    ],
  });

  return header;
}
