import BaseComponent from './components/base-component';

export default class App {
  private body: HTMLElement;

  private greetingWord: BaseComponent;

  constructor() {
    this.body = document.body;
    this.greetingWord = new BaseComponent({
      tag: 'h1',
      className: 'greeting',
      text: 'Hello world',
    });
  }

  public start() {
    this.body.append(this.greetingWord.getNode());
  }
}
