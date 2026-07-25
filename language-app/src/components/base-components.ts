type BaseComponentProps = {
  tag?: keyof HTMLElementTagNameMap;
  className?: string;
  text?: string;
  children?: HTMLElement[];
};

const BaseComponents = ({
  tag = 'div',
  className = '',
  text = '',
  ...children
}: BaseComponentProps) => {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = text;
  element.append(...(children.children || []));

  return element;
};

export default BaseComponents;
