import BaseComponent from '../../base-components.ts';

type ButtonProps = {
  tag?: keyof HTMLElementTagNameMap;
  className?: string;
  text?: string;
};

export default function Button(props: ButtonProps): HTMLElement {
  const batton = BaseComponent({
    tag: 'button',
    className: 'btn',
    text: `${props.text}`,
  });

  return batton;
}
