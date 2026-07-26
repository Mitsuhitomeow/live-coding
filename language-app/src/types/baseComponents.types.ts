export type BaseComponentProps = {
  tag?: keyof HTMLElementTagNameMap;
  className?: string;
  text?: string;
  children?: HTMLElement[];
};
