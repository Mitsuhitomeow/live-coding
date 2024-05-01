export default class BaseComponent {
  protected children: BaseComponent[] = [];

  protected node;

  constructor({ tag = 'div', className = '', text = '' }, ...children: BaseComponent[]) {
    const node = document.createElement(tag);
    node.className = className;
    node.textContent = text;
    this.node = node;

    if (children) {
      this.appendChildren(children);
    }
  }

  public append(child: BaseComponent) {
    this.children.push(child);
    this.node.append(child.getNode());
  }

  public appendChildren(children: BaseComponent[]) {
    children.forEach((child) => {
      this.append(child);
    });
  }

  public getNode() {
    return this.node;
  }

  public getChildren() {
    return this.children;
  }

  public setTextContent(content: string) {
    this.node.textContent = content;
  }

  public addAttribute(attribute: string, value: string) {
    this.node.setAttribute(attribute, value);
  }

  public deleteAttribute(attribute: string) {
    this.node.removeAttribute(attribute);
  }

  public toggleClass(className: string) {
    this.node.classList.toggle(className);
  }

  public addListener(event: string, listener: (e: Event) => void, options = false) {
    this.node.addEventListener(event, listener, options);
  }

  public removeListener(event: string, listener: (e: Event) => void, options = false) {
    this.node.removeEventListener(event, listener, options);
  }

  public destroyChildren() {
    const childrenNodes = this.node.childNodes as NodeListOf<HTMLElement>;
    childrenNodes.forEach((child: HTMLElement) => {
      if (child instanceof BaseComponent) {
        child.destroy();
      }
    });
    this.children.length = 0;
  }

  public destroy() {
    this.destroyChildren();
    this.node.remove();
  }
}
