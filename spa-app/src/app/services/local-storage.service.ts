export default class LocalStorage {
  private isUserStorage: boolean;

  constructor() {
    this.isUserStorage = false;
  }

  public checkStorage(): boolean {
    return this.isUserStorage;
  }
}
