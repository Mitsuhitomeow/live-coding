import BaseComponents from '@/components/BaseComponent';
import Button from '@/components/common/Button';
import Nav from './Nav';
import Link from '../common/link';

export default function Header(): HTMLElement {
  const header = BaseComponents({
    tag: 'header',
    className: 'header',
    children: [
      Link({
        text: 'Logo',
        path: '/',
      }),
      Nav(),
      Button({
        className: 'header__button',
        text: `click me`,
        events: {
          click: () => {
            const body = document.body;

            if (body.style.backgroundColor === 'red') {
              body.style.backgroundColor = 'white';
            } else {
              body.style.backgroundColor = 'red';
            }
          },
        },
      }),
    ],
  });

  return header;
}
