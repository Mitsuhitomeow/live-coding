import BaseComponent from '@/components';

type ButtonProps = {
  tag?: keyof HTMLElementTagNameMap;
  className?: string;
  text?: string;
  events?: Record<string, EventListener>;
};

export default function Button(props: ButtonProps): HTMLElement {
  const batton = BaseComponent({
    tag: 'button',
    className: 'btn',
    text: `${props.text}`,
  });

  Object.entries(props.events || {}).forEach(([event, listener]) => {
    batton.addEventListener(event, listener);
  });

  return batton;
}
