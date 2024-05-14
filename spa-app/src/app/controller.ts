import BaseComponent from './components/base-component';
import Authorization from './pages/auth/auth';
import PageContent from './pages/page-content/page-content';
import LocalStorage from './services/local-storage.service';

export default class Controller {
  private auth: Authorization;

  private pageContent: PageContent;

  private storage: LocalStorage;

  private appRoot: BaseComponent;

  constructor() {
    this.appRoot = new BaseComponent({ className: 'app' });
    this.auth = new Authorization();
    this.pageContent = new PageContent();

    this.storage = new LocalStorage();
  }

  /**
   * @description Метод для проверки залогинен ли Юзер.
   * @return {Boolean} Возвращает, true если Юзер залогинен, иначе false.
   * @todo Создать Сервис по работе с локальным хранилищем.
   */
  private isUserOnline(): boolean {
    return this.storage.checkStorage();
  }

  public renderPage(): void {
    if (!this.isUserOnline()) {
      this.appRoot.append(this.auth.getNode());
    } else {
      this.appRoot.append(this.pageContent.getNode());
    }
  }

  public getNode(): HTMLElement {
    this.renderPage();

    return this.appRoot.getNode();
  }
}
