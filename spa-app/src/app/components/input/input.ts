import BaseComponent from '../base-component';

interface IInput {
  type: string;
  className: string;
  placeholder: string;
}

export default class Input extends BaseComponent {
  constructor({ type, className, placeholder }: IInput) {
    super({ tag: 'input', className });

    this.addAttribute('type', type);
    this.addAttribute('placeholder', placeholder);
  }
}
