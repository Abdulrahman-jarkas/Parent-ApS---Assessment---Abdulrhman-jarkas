import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/auth.component').then((c) => c.AuthComponent),
    data: {
      authType: 'register',
    },
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/auth.component').then((c) => c.AuthComponent),
      data: {
        authType: 'login',
      },
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./features/users-list/users-list.component').then(
        (c) => c.UsersListComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'users',
  },
];
