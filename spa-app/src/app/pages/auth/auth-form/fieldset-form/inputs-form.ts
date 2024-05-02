import BaseComponent from '../../../../components/base-component';
import Input from '../../../../components/input/input';

export default class InputsForm {
  private inputsForm: BaseComponent;

  constructor() {
    this.inputsForm = new BaseComponent(
      {
        className: 'auth-fieldset--inputs',
      },
      new Input({
        type: 'input',
        className: 'fieldset-input--login input',
        placeholder: 'Login',
      }),
      new Input({
        type: 'password',
        className: 'fieldset-input--password input',
        placeholder: 'password',
      }),
    );
  }

  public getComponent() {
    return this.inputsForm;
  }
}
