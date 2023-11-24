import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { AlertService } from '../services/alert.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  private readonly alert = inject(AlertService);

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string | null = localStorage.getItem('token');

    if (token) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });

    return next.handle(request).pipe(
      catchError((error) => {
        console.log(error);
        this.alert.error(error?.error?.error);
        return EMPTY;
      })
    );
  }
}
