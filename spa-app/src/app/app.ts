import Controller from './controller';
// import Pages from './pages/pages';

export default class App {
  private body: HTMLElement;

  private controller: Controller;

  constructor() {
    this.body = document.body;
    this.controller = new Controller();
  }

  public start(): void {
    this.body.append(this.controller.getNode());
  }
}
