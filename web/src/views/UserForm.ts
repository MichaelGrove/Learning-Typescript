import { User, UserProps } from '../models/User'
import { View } from './View'

export class UserForm extends View<User,UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:[data-set-age]': this.onSetAgeClick.bind(this),
      'click:[data-set-name]': this.onSetNameClick.bind(this),
      'click:[data-save-model]': this.onSaveClick.bind(this)
    }
  }

  onSetAgeClick(): void {
    this.model.setRandomAge();
  }

  onSetNameClick(): void {
    const input: HTMLInputElement | null = this.parent.querySelector('[data-user-name]');
    if (input) {
      const name = input.value;
      this.model.set({ name })
    }
  }

  onSaveClick(): void {
    this.model.save();
  }

  template(): string {
    return `
      <div>
        <input
          data-user-name
          placeholder="${this.model.get('name')}"
        />
        <button data-set-name>Change name</button>
        <button data-set-age>Set random age</button>
        <button data-save-model>Save User</button>
      </div>
    `
  }
}