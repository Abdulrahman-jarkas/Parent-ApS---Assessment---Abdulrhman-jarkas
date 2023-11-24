import { Injectable, inject } from '@angular/core';
import { map, catchError, exhaustMap, EMPTY } from 'rxjs';
import { UsersService } from '../../services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersActions } from './users.actions';
import { AlertService } from '../../services/alert.service';

@Injectable({ providedIn: 'root' })
export class UsersEffictService {
  private readonly usersService = inject(UsersService);
  private readonly actions$ = inject(Actions);
  private readonly alert = inject(AlertService);

  getUsersEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.getUsers),
      exhaustMap(({ page }) =>
        this.usersService.users(page).pipe(
          map((res) => UsersActions.getUsersSuccess(res)),
          catchError((errors: string[]) => {
            UsersActions.failed(errors);
            return EMPTY;
          })
        )
      )
    )
  );

  getUserEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.getUsersByUserId),
      exhaustMap(({ userId }) =>
        this.usersService.userDetails(userId).pipe(
          map((res) => UsersActions.getUsersByUserIdSuccess(res.data)),
          catchError((errors: string[]) => {
            UsersActions.failed(errors);
            return EMPTY;
          })
        )
      )
    )
  );

  createUser = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.createUser),
      exhaustMap(({ data }) =>
        this.usersService.createUser(data).pipe(
          map(() => {
            this.alert.success('User created successfully!');
            return UsersActions.createUserSuccess();
          }),
          catchError((errors: string[]) => {
            UsersActions.failed(errors);
            return EMPTY;
          })
        )
      )
    )
  );

  updateUser = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.updateUser),
      exhaustMap(({ id, data }) =>
        this.usersService.updateUser(id, data).pipe(
          map(() => {
            this.alert.success('User updated successfully!');

            return UsersActions.updateUserSuccess();
          }),
          catchError((errors: string[]) => {
            UsersActions.failed(errors);
            return EMPTY;
          })
        )
      )
    )
  );

  deleteUser = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.deleteUser),
      exhaustMap(({ id }) =>
        this.usersService.deleteUser(id).pipe(
          map(() => {
            this.alert.success('User deleted successfully!');

            return UsersActions.deleteUserSuccess(id);
          }),
          catchError((errors: string[]) => {
            UsersActions.failed(errors);
            return EMPTY;
          })
        )
      )
    )
  );
}
