import BaseComponent from '../../components/base-component';
import AuthForm from './auth-form/auth-form';
import './auth.scss';

export default class Authorization {
  private authForm: AuthForm;

  private auth: BaseComponent;

  constructor() {
    this.authForm = new AuthForm();
    const AuthFormComponent = this.authForm.getComponent();

    this.auth = new BaseComponent(
      {
        className: 'auth',
      },
      AuthFormComponent,
    );
  }

  public getComponent(): HTMLElement {
    return this.auth.getNode();
  }
}
