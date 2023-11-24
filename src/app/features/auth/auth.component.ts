import { Component, inject, Input, OnDestroy } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { TextInputComponent } from '../../components';
import { AuthService } from '../../services';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [TextInputComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnDestroy {
  @Input() authType: 'login' | 'register' = 'login';

  private authService = inject(AuthService);
  private sub = new Subscription();

  form = new FormGroup({
    email: new FormControl<string>('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: new FormControl<string>('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  ngOnInit() {
    this.authService.setToken('');
  }

  save() {
    const { email, password } = this.form.getRawValue();

    const action =
      this.authType === 'login'
        ? this.authService.login(email, password)
        : this.authService.register(email, password);

    this.sub.add(action.subscribe());
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
