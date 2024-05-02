import BaseComponent from '../../../components/base-component';

export default class Header {
  private header: BaseComponent;

  constructor() {
    this.header = new BaseComponent({
      tag: 'header',
      className: 'header',
    });
  }

  public getNode() {
    return this.header.getNode();
  }
}
