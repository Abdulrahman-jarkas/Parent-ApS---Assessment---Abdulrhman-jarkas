import { createSelector } from '@ngrx/store';
import { selectErrors, selectPagination, selectSelectedUser, selectUsers } from './users.reduer';

export const usersUISelector = createSelector({
  users: selectUsers,
  pagination: selectPagination,
  errors: selectErrors,
  selectedUser: selectSelectedUser,
});
