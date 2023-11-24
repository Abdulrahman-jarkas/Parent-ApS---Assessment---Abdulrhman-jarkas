import { Component, inject } from '@angular/core';
import { PaginationComponent, TableComponent } from '../../components';
import { ColumnsDef } from '../../models';
import { UsersService } from '../../services';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [PaginationComponent, TableComponent, UserDetailsComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  private readonly usersService = inject(UsersService);

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

  data = [
    {
      first_name: 'test',
      last_name: 'test',
      avatar:
        'https://www.shareicon.net/data/128x128/2016/05/24/770137_man_512x512.png',
      id: 1,
      email: 'abd@gmail.com',
    },
    {
      first_name: 'test 2',
      last_name: 'test',
      avatar:
        'https://www.shareicon.net/data/128x128/2016/05/24/770137_man_512x512.png',
      id: 2,
      email: 'abd@gmail.com',
    },
    {
      first_name: 'test 3',
      last_name: 'test',
      avatar:
        'https://www.shareicon.net/data/128x128/2016/05/24/770137_man_512x512.png',
      id: 3,
      email: 'abd@gmail.com',
    },
  ];

  ngOnInit() {
    this.usersService.users().subscribe(console.log);
  }
}
