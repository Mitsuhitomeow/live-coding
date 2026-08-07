import BaseComponent from '@/components/BaseComponent';
import Link from '@/components/common/link';
import { ROUTES } from '@/constants/router.constants';
import styles from '@/components/Header/Nav/nav.module.scss';

export default function Nav(): HTMLElement {
  return BaseComponent({
    tag: 'nav',
    className: styles.headerNavigation,
    children: [
      Link({
        text: 'Home',
        className: styles.headerNavigationLink,
        path: ROUTES.HOME,
        isRouterLink: true,
      }),
      Link({
        text: 'Training',
        className: styles.headerNavigationLink,
        path: ROUTES.TRAINING,
        isRouterLink: true,
      }),
      Link({
        text: 'Dictionary',
        className: styles.headerNavigationLink,
        path: ROUTES.DICTIONARY,
        isRouterLink: true,
      }),
    ],
  });
}
