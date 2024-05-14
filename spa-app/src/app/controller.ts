import BaseComponent from './components/base-component';
import Authorization from './pages/auth/auth';
import PageContent from './pages/page-content/page-content';
import LocalStorage from './services/local-storage.service';

export default class Controller extends BaseComponent {
  private auth: Authorization;

  private pageContent: PageContent;

  private storage: LocalStorage;

  constructor() {
    super({ tag: 'div', className: 'app' });
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

  public getNode(): HTMLElement {
    if (!this.isUserOnline()) {
      return this.auth.getComponent();
    }
    return this.pageContent.getNode();
  }
}
