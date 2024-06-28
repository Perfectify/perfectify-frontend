import {HttpInterceptorFn} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {inject} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";
import {from, switchMap} from "rxjs";

const API_URL = environment.apiUrl;

export const httpAuthenticationInterceptor: HttpInterceptorFn = (req, next) => {
  const authenticationService = inject(AuthenticationService);
  if (req.url.startsWith(API_URL) && authenticationService.isAuthenticated()) {
    return from(authenticationService.getToken()!).pipe(
      switchMap(idTokenResult => {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${idTokenResult.token}`
          }
        })
        return next(req)
      })
    )
  } else {
    return next(req);
  }
};
