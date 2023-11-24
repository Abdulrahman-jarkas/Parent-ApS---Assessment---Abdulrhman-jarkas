import { createFeature, createReducer, on } from '@ngrx/store';
import { PaginationApi, UserDetails } from '../../models';
import { UsersActions } from './users.actions';

interface IUserState {
  errors: string[];
  users: UserDetails[];
  pagination: PaginationApi;
  selectedUser: UserDetails | null;
}

const initState: IUserState = {
  errors: [],
  users: [],
  selectedUser: null,
  pagination: {
    page: 1,
    per_page: 6,
    total: 0,
    total_pages: 0,
  },
};

export const UserFeature = createFeature({
  name: 'UserS_FEATURE',
  reducer: createReducer(
    initState,
    on(UsersActions.getUsersSuccess, (state, { data }) => {
      const { data: users, ...pagination } = data;
      return {
        ...state,
        users: [...users.map((user) => ({ ...user }))],
        pagination: { ...pagination },
      };
    }),
    on(UsersActions.getUsersByUserIdSuccess, (state, { data }) => {
      return {
        ...state,
        selectedUser: { ...data },
      };
    }),
    on(UsersActions.failed, (state, { errors }) => ({
      ...state,
      errors,
    }))
  ),
});

export const { name, reducer, selectErrors, selectUsers, selectPagination,selectSelectedUser } =
  UserFeature;
