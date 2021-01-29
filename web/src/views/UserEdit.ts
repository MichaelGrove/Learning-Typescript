import { View } from './View'
import { User, UserProps } from '../models/User'
import { UserForm } from './UserForm'
import { UserShow } from './UserShow'

export class UserEdit extends View<User, UserProps> {

  regionsMap(): { [key: string]: string } {
    return {
      userShow: '[data-user-show]',
      userForm: '[data-user-form]',
    }
  }

  onRender(): void {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }

  template(): string {
    return `
      <div>
        <div data-user-show></div>
        <div data-user-form></div>
      </div>
    `;
  }
}
