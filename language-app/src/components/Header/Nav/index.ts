import BaseComponent from '@/components/BaseComponent';
import Link from '@/components/common/link';

export default function Nav(): HTMLElement {
  return BaseComponent({
    tag: 'nav',
    className: 'header-navigation',
    children: [
      Link({
        text: 'Training',
        path: '/training',
        isRouterLink: true,
      }),
      Link({
        text: 'Dictionary',
        path: '/dictionary',
        isRouterLink: true,
      }),
      Link({
        text: 'Home',
        path: '/',
        isRouterLink: true,
      }),
    ],
  });
}
