import { NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private authService = inject(AuthService);
  isLoggedIn = this.authService.isLoggedIn;
}
