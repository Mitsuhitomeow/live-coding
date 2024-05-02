import BaseComponent from '../base-component';

interface IInput {
  type: string;
  className: string;
  placeholder: string;
  required?: boolean;
  onInput?: (e: Event) => void;
}

export default class Input extends BaseComponent {
  constructor({ type, className, placeholder, required, onInput }: IInput) {
    super({ tag: 'input', className });

    this.addAttribute('type', type);
    this.addAttribute('placeholder', placeholder);

    if (required !== null) {
      this.addAttribute('required', '');
    }

    if (onInput) {
      this.addListener('input', (e) => onInput(e));
    }
  }

  public getValue() {
    const node = this.getNode() as HTMLInputElement;
    if (node) {
      const element = node;
      return element.value;
    }
    return null;
  }
}
