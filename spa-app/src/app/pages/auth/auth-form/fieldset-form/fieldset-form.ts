import BaseComponent from '../../../../components/base-component';
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
    );
  }

  public getComponent(): BaseComponent {
    return this.fieldset;
  }
}
