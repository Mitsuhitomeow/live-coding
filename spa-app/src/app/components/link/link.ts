import BaseComponent from '../base-component';

interface ILink {
  className: string;
  text: string;
  href: string;
}

export default class Link extends BaseComponent {
  constructor({ className, text, href }: ILink) {
    super({ className, text });
    this.node.textContent = text;

    this.addAttribute('href', href);
    this.addAttribute('target', '_blank');
    this.addAttribute('rel', 'noopener');
    this.addAttribute('rel', 'noreferrer');
  }
}
