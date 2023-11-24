import { Component } from '@angular/core';
import { TextInputComponent } from '../../components';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [TextInputComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {}
