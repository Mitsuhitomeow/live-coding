type BaseComponentProps = {
  tag?: keyof HTMLElementTagNameMap;
  className?: string;
  text?: string;
  children?: HTMLElement[];
};

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
