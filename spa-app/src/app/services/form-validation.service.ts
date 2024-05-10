interface IValidation {
  log: string;
  pass: string;
}

export default class Validation {
  private log;

  private pass;

  constructor({ log, pass }: IValidation) {
    this.log = log;
    this.pass = pass;
  }

  public getLogPass(): void {
    if (this.log.trim() === '' || this.pass.trim() === '') {
      console.log('error');
    } else {
      console.log(this.log, this.pass);
    }
  }
}
