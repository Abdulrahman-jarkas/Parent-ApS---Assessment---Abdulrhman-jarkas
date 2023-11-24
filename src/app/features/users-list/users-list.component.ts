import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent, TableComponent } from '../../components';
import { ColumnsDef } from '../../models';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, PaginationComponent, TableComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
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
  ];

  data = [
    {
      first_name: 'test',
      last_name: 'test',
      avatar:
        'https://www.shareicon.net/data/128x128/2016/05/24/770137_man_512x512.png',
      id: 1,
    },
    {
      first_name: 'test 2',
      last_name: 'test',
      avatar:
        'https://www.shareicon.net/data/128x128/2016/05/24/770137_man_512x512.png',
      id: 2,
    },
    {
      first_name: 'test 3',
      last_name: 'test',
      avatar:
        'https://www.shareicon.net/data/128x128/2016/05/24/770137_man_512x512.png',
      id: 3,
    },
  ];
}
