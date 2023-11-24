import { Component } from '@angular/core';
import { TextInputComponent } from '../../components';

@Component({
  selector: 'user-details',
  standalone: true,
  imports: [TextInputComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent {}
