import { Injectable, inject } from '@angular/core';
import { map, catchError, exhaustMap, EMPTY } from 'rxjs';
import { UsersService } from '../../services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersActions } from './users.actions';

@Injectable({ providedIn: 'root' })
export class UsersEffictService {
  private readonly usersService = inject(UsersService);
  private readonly actions$ = inject(Actions);

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
          map(() => UsersActions.createUserSuccess()),
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
          map(() => UsersActions.updateUserSuccess()),
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
          map(() => UsersActions.deleteUserSuccess()),
          catchError((errors: string[]) => {
            UsersActions.failed(errors);
            return EMPTY;
          })
        )
      )
    )
  );
}
