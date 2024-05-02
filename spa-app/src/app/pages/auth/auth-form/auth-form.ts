import BaseComponent from '../../../components/base-component';
import Fieldset from './fieldset-form/fieldset-form';
import './auth-form.scss';

export default class AuthForm {
  private form: Fieldset;

  private auth: BaseComponent;

  constructor() {
    this.form = new Fieldset();
    const FieldsetFormComponent = this.form.getComponent();

    this.auth = new BaseComponent(
      {
        className: 'auth-form',
      },
      FieldsetFormComponent,
    );
  }

  public getComponent() {
    return this.auth;
  }
}
