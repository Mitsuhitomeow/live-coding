import type { BaseComponentProps } from '@/types/baseComponents.types';

export default function BaseComponent({
  tag = 'div',
  className = '',
  text = '',
  attributes = {},
  ...children
}: BaseComponentProps): HTMLElement {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text) {
    element.textContent = text;
  }

  element.append(...(children.children || []));

  Object.entries(attributes).forEach(([key, value]) => {
    if (value === '') {
      return;
    }

    element.setAttribute(key, value);
  });

  return element;
}
