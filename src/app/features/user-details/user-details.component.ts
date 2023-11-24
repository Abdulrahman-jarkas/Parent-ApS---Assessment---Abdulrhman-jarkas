import { NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { TextInputComponent } from '../../components';
import { UserDetails } from '../../models';
import { UsersActions } from '../../store/users';

@Component({
  selector: 'user-details',
  standalone: true,
  imports: [TextInputComponent, ReactiveFormsModule, NgIf],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent {
  private readonly store = inject(Store);
  private _user!: UserDetails | null;

  get user() {
    return this._user;
  }
  @Input({ required: false }) set user(data: UserDetails | null) {
    this._user = data;
    if (data) {
      this.form.patchValue({
        name: data.first_name + ' ' + data.last_name,
        email: data.email,
      });

      this.form.disable();
    }
  }

  form = new FormGroup({
    name: new FormControl<string>('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    job: new FormControl<string>('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    email: new FormControl<string>(''),
  });

  clear() {
    // info message and note to select user;
    this.user = null;
  }

  delete() {
    // info message and note to select user;
    this.store.dispatch(UsersActions.deleteUser(this.user?.id!));
  }

  reload() {
    // info message and note to select user;
    this.store.dispatch(UsersActions.getUsersByUserId(this.user?.id!));
  }

  edit() {
    // info message and note to select user;
    this.form.get('name')?.enable();
    this.form.get('job')?.enable();
  }
}
