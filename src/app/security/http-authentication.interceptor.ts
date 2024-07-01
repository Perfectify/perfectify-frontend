import {HttpInterceptorFn} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {inject} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";
import {catchError, from, switchMap, take} from "rxjs";

const API_URL = environment.apiUrl;

export const httpAuthenticationInterceptor: HttpInterceptorFn = (req, next) => {
  const authenticationService = inject(AuthenticationService);
  if (req.url.startsWith(API_URL)) {
    return authenticationService.userObservable.pipe(
      take(1),
      switchMap(user => {
        if (!user) {
          return next(req);
        }
        return from(authenticationService.getToken()!).pipe(
          switchMap(idTokenResult => {
            if (idTokenResult) {
              req = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${idTokenResult.token}`
                }
              });
            }
            return next(req);
          })
        );
      })
    );
  } else {
    return next(req);
  }
};
