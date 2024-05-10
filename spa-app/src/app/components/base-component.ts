type BaseTypes = {
  tag?: string;
  className: string;
  text?: string;
};

export default class BaseComponent {
  protected children: BaseComponent[] = [];

  protected node;

  constructor({ tag = 'div', className = '', text = '' }: BaseTypes, ...children: BaseComponent[]) {
    const node = document.createElement(tag);
    node.className = className;
    node.textContent = text;
    this.node = node;

    if (children) {
      this.appendChildren(children);
    }
  }

  public append(child: BaseComponent): void {
    this.children.push(child);
    this.node.append(child.getNode());
  }

  public appendChildren(children: BaseComponent[]): void {
    children.forEach((child) => {
      this.append(child);
    });
  }

  public getNode(): HTMLElement {
    return this.node;
  }

  public getChildren(): BaseComponent[] {
    return this.children;
  }

  public setTextContent(content: string): void {
    this.node.textContent = content;
  }

  public addAttribute(attribute: string, value: string): void {
    this.node.setAttribute(attribute, value);
  }

  public deleteAttribute(attribute: string): void {
    this.node.removeAttribute(attribute);
  }

  public toggleClass(className: string): void {
    this.node.classList.toggle(className);
  }

  public addListener(event: string, listener: (e: Event) => void, options = false): void {
    this.node.addEventListener(event, listener, options);
  }

  public removeListener(event: string, listener: (e: Event) => void, options = false): void {
    this.node.removeEventListener(event, listener, options);
  }

  public destroyChildren(): void {
    const childrenNodes = this.node.childNodes as NodeListOf<HTMLElement>;
    childrenNodes.forEach((child: HTMLElement) => {
      if (child instanceof BaseComponent) {
        child.destroy();
      }
    });
    this.children.length = 0;
  }

  public destroy(): void {
    this.destroyChildren();
    this.node.remove();
  }
}
