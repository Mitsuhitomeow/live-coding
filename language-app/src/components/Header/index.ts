import BaseComponents from '@/components/BaseComponent';
import Button from '@/components/common/Button';
import Nav from './Nav';
import Link from '../common/link';
import { ROUTES } from '@/constants/router.constants';
import styles from './header.module.scss';

export default function Header(): HTMLElement {
  const header = BaseComponents({
    tag: 'header',
    className: styles.header,
    children: [
      Link({
        text: 'Logo',
        path: ROUTES.HOME,
        isRouterLink: true,
      }),
      Nav(),
      Button({
        className: styles.headerButton,
        text: `click me`,
        events: {
          click: () => {
            const body = document.body;

            if (body.style.backgroundColor === 'red') {
              body.style.backgroundColor = '#1E1B4B';
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
