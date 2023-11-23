import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./features/auth/auth.component').then((c) => c.AuthComponent),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./features/users-list/users-list.component').then(
        (c) => c.UsersListComponent
      ),
  },
  {
    path: 'user/:id',
    loadComponent: () =>
      import('./features/user-details/user-details.component').then(
        (c) => c.UserDetailsComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'users',
  },
];
