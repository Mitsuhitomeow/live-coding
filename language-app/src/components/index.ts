import type { BaseComponentProps } from '@/types/baseComponents.types';

export default function BaseComponent({
  tag = 'div',
  className = '',
  text = '',
  ...children
}: BaseComponentProps): HTMLElement {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = text;
  element.append(...(children.children || []));

  return element;
}
