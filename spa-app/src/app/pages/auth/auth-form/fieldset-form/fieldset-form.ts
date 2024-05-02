import BaseComponent from '../../../../components/base-component';
import Button from '../../../../components/button/button';
import Validation from '../../../../services/form-validation.service';
import InputsForm from './inputs-form';

export default class Fieldset {
  private fieldset: BaseComponent;

  private inputs: InputsForm;

  constructor() {
    this.inputs = new InputsForm();
    const InputsComponent = this.inputs.getComponent();
    this.fieldset = new BaseComponent(
      {
        tag: 'fieldset',
        className: 'auth-form--fieldset',
      },
      new BaseComponent({
        tag: 'legend',
        className: 'fieldset-legend',
        text: 'Authorization',
      }),
      InputsComponent,
      new Button({
        className: 'fieldset-button btn',
        text: 'Log In',
        callback: () => this.initValidation(),
      }),
    );
  }

  private initValidation() {
    const logValue = this.inputs.getLogValue() || '';
    const passValue = this.inputs.getPassValue() || '';

    const validation = new Validation({
      log: logValue,
      pass: passValue,
    });

    validation.getLogPass();
  }

  public getComponent() {
    return this.fieldset;
  }
}
