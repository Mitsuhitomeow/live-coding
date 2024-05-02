import BaseComponent from '../../../../components/base-component';
import Button from '../../../../components/button/button';
import Input from '../../../../components/input/input';
import Validation from '../../../../services/form-validation.service';

export default class InputsForm {
  private inputsForm: BaseComponent;

  private logInput: Input;

  private passInput: Input;

  private button: Button;

  constructor() {
    this.logInput = new Input({
      type: 'input',
      className: 'fieldset-input--login input',
      placeholder: 'Login',
      required: true,
      onInput: (e) => this.checkInputChange(e),
    });

    this.passInput = new Input({
      type: 'password',
      className: 'fieldset-input--password input',
      placeholder: 'password',
      required: true,
      onInput: (e) => this.checkInputChange(e),
    });

    this.button = new Button({
      className: 'fieldset-button btn',
      text: 'Log In',
      type: 'submit',
      callback: () => this.initValidation(),
    });

    this.inputsForm = new BaseComponent({
      className: 'auth-fieldset--inputs',
    });
    this.inputsForm.appendChildren([this.logInput, this.passInput, this.button]);
    this.checkInputValue();
  }

  private initValidation() {
    const logValue = this.getLogValue() || '';
    const passValue = this.getPassValue() || '';

    const validation = new Validation({
      log: logValue,
      pass: passValue,
    });
    validation.getLogPass();
  }

  private checkInputValue() {
    const children = this.inputsForm.getChildren();

    children.forEach((child) => {
      const node = child.getNode();
      if (!node.classList.contains('input')) return;

      const inputElement = node as HTMLInputElement;
      if (inputElement.value.trim() === '') {
        this.button.disable();
      } else {
        this.button.enable();
      }
    });
  }

  private isValueInInput() {
    if (this.getLogValue()?.trim() === '' || this.getPassValue()?.trim() === '') {
      this.button.disable();
    } else {
      this.button.enable();
    }
  }

  private checkInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;

    if (inputValue) {
      this.isValueInInput();
    }
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
