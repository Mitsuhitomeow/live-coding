import Pages from './pages/pages';

export default class App {
  private body: HTMLElement;

  private pages: Pages;

  constructor() {
    this.body = document.body;
    this.pages = new Pages();
  }

  public start() {
    this.body.append(this.pages.getNode());
  }
}
