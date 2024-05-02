import BaseComponent from '../../../../components/base-component';
import Input from '../../../../components/input/input';

export default class InputsForm {
  private inputsForm: BaseComponent;

  private logInput: Input;

  private passInput: Input;

  constructor() {
    this.logInput = new Input({
      type: 'input',
      className: 'fieldset-input--login input',
      placeholder: 'Login',
      required: true,
    });

    this.passInput = new Input({
      type: 'password',
      className: 'fieldset-input--password input',
      placeholder: 'password',
      required: true,
    });

    this.inputsForm = new BaseComponent({
      className: 'auth-fieldset--inputs',
    });

    this.inputsForm.appendChildren([this.logInput, this.passInput]);
  }

  public getLogValue() {
    return this.logInput.getValue();
  }

  public getPassValue() {
    return this.passInput.getValue();
  }

  public getComponent() {
    return this.inputsForm;
  }
}
