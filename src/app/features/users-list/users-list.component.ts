import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { PaginationComponent, TableComponent } from '../../components';
import { ColumnsDef } from '../../models';
import { UsersActions, usersUISelector } from '../../store/users';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    PaginationComponent,
    TableComponent,
    UserDetailsComponent,
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  private readonly store = inject(Store);
  data$ = this.store.select(usersUISelector);

  columnsDef: ColumnsDef[] = [
    {
      name: 'Image',
      type: 'image',
      key: 'avatar',
    },
    {
      name: 'First name',
      type: 'text',
      key: 'first_name',
    },
    {
      name: 'Last name',
      type: 'text',
      key: 'last_name',
    },
    {
      name: 'Email',
      type: 'text',
      key: 'email',
    },
  ];

  ngOnInit() {
    this.changePage(1);
  }

  changePage(page: number) {
    this.store.dispatch(UsersActions.getUsers(page));
  }
}
