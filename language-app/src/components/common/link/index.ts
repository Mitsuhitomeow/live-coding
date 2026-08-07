import BaseComponent from '@/components/BaseComponent';
import navigate from '@/router/navigate';
import type { LinkProps } from '@/types/link.types';

export default function Link({
  text,
  path,
  className,
  isRouterLink = false,
}: LinkProps): HTMLElement {
  const link = BaseComponent({
    tag: 'a',
    text,
    className,
    attributes: {
      href: path,
    },
  });

  if (!isRouterLink) {
    return link;
  }

  link.addEventListener('click', (event) => {
    event.preventDefault();

    navigate(path);
  });

  return link;
}
