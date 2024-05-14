import BaseComponent from '../../components/base-component';
import Header from './header/header';

export default class PageContent {
  private pageContent: BaseComponent;

  private header: Header;

  constructor() {
    this.header = new Header();
    const HeaderComponent = this.header.getComponent();
    this.pageContent = new BaseComponent(
      {
        className: 'page-container',
      },
      HeaderComponent,
    );
  }

  public getNode(): BaseComponent {
    return this.pageContent;
  }
}
