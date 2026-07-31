import BaseComponent from '@/components/BaseComponent';
import Link from '@/components/common/link';
import { ROUTES } from '@/constants/router.constants';

export default function Nav(): HTMLElement {
  return BaseComponent({
    tag: 'nav',
    className: 'header-navigation',
    children: [
      Link({
        text: 'Home',
        path: ROUTES.HOME,
        isRouterLink: true,
      }),
      Link({
        text: 'Training',
        path: ROUTES.TRAINING,
        isRouterLink: true,
      }),
      Link({
        text: 'Dictionary',
        path: ROUTES.DICTIONARY,
        isRouterLink: true,
      }),
    ],
  });
}
