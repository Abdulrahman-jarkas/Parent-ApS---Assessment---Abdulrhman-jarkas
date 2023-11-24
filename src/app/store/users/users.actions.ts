import { createActionGroup, emptyProps } from '@ngrx/store';
import {
  CreateUserDto,
  GetUsersListResponse,
  UpdateUserDto,
  UserDetails,
} from '../../models';

export const UsersActions = createActionGroup({
  source: 'Users',
  events: {
    getUsers: (page: number) => ({ page }),
    getUsersSuccess: (data: GetUsersListResponse) => ({
      data,
    }),
    getUsersByUserId: (userId: number) => ({ userId }),
    getUsersByUserIdSuccess: (data: UserDetails) => ({
      data,
    }),
    createUser: (data: CreateUserDto) => ({ data }),
    createUserSuccess: emptyProps,

    updateUser: (id: number, data: UpdateUserDto) => ({ id, data }),
    updateUserSuccess: emptyProps,

    deleteUser: (id: number) => ({ id }),
    deleteUserSuccess: (id: number) => ({ id }),

    failed: (errors: string[]) => ({ errors }),
  },
});
