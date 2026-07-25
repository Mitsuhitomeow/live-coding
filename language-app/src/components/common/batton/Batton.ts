import baseComponent from '../../base-components.ts';

type ButtonProps = {
  tag?: keyof HTMLElementTagNameMap;
  className?: string;
  text?: string;
};

export default function Button(props: ButtonProps) {
  const batton = baseComponent({
    tag: 'button',
    className: 'btn',
    text: `${props.text}`,
  });

  return batton;
}
