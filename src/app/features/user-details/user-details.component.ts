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
import { AlertService } from '../../services/alert.service';
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
  private readonly alert = inject(AlertService);

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
        job: '',
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
    this.user = null;
  }

  delete() {
    this.alert
      .confirm('Are you sure you want to delete this user?')
      .then((res) => {
        if (res.isConfirmed) {
          this.store.dispatch(UsersActions.deleteUser(this.user?.id!));
        }
      });
  }

  edit() {
    this.form.get('name')?.enable();
    this.form.get('job')?.enable();
  }

  viewonly() {
    this.form.disable();
  }

  submit() {
    const { email, ...value } = this.form.getRawValue();

    this.store.dispatch(
      this.user
        ? UsersActions.updateUser(this.user.id, value)
        : UsersActions.createUser(value)
    );
  }
}
