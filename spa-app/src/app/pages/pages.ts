import BaseComponent from '../components/base-component';
import Authorization from './auth/auth';

export default class Pages {
  private pages: BaseComponent;

  private auth: Authorization;

  constructor() {
    this.auth = new Authorization();
    const AuthComponent = this.auth.getComponent();
    this.pages = new BaseComponent(
      {
        className: 'container',
      },
      AuthComponent,
    );
  }

  public getNode(): HTMLElement {
    return this.pages.getNode();
  }
}
