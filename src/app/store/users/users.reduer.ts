import { createFeature, createReducer, on } from '@ngrx/store';
import { PaginationApi, UserDetails } from '../../models';
import { UsersActions } from './users.actions';

interface IUserState {
  errors: string[];
  users: UserDetails[];
  pagination: PaginationApi;
  selectedUser: UserDetails | null;
  loading: boolean;
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
  loading: false,
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
        loading: true,
      };
    }),
    on(UsersActions.getUsersByUserIdSuccess, (state, { data }) => {
      return {
        ...state,
        selectedUser: { ...data },
        loading: true,
      };
    }),
    on(UsersActions.failed, (state, { errors }) => ({
      ...state,
      errors,
      loading: true,
    })),
    on(UsersActions.getUsers, (state) => ({
      ...state,
      loading: true,
    })),
    on(UsersActions.getUsersByUserId, (state) => ({
      ...state,
      loading: true,
    })),
    on(UsersActions.createUser, (state) => ({
      ...state,
      loading: true,
    })),
    on(UsersActions.updateUser, (state) => ({
      ...state,
      loading: true,
    })),
    on(UsersActions.deleteUser, (state) => ({
      ...state,
      loading: true,
    }))
  ),
});

export const {
  name,
  reducer,
  selectErrors,
  selectUsers,
  selectPagination,
  selectSelectedUser,
} = UserFeature;
