import BaseComponent from '../base-component';

interface IButton {
  text: string;
  className: string;
  callback?: (e: Event) => void;
}

export default class Button extends BaseComponent {
  constructor({ text, className, callback }: IButton) {
    super({ tag: 'button', className, text });

    if (callback) {
      this.addListener('click', (e) => {
        e.preventDefault();
        callback(e);
      });
    }
  }
}
