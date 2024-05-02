import BaseComponent from '../base-component';

interface IButton {
  text: string;
  className: string;
  type?: string;
  callback?: (e: Event) => void;
}

export default class Button extends BaseComponent {
  constructor({ text, className, type, callback }: IButton) {
    super({ tag: 'button', className, text });

    if (type) {
      this.addAttribute('type', type);
    }

    if (callback) {
      this.addListener('click', (e) => {
        e.preventDefault();
        callback(e);
      });
    }
  }

  public disable() {
    this.addAttribute('disabled', 'true');
  }

  public enable() {
    this.deleteAttribute('disabled');
  }
}
