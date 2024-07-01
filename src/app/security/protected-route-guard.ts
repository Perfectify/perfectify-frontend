import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {UserService} from "../services/user.service";
import {catchError, first, from, map, Observable, of, switchMap} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class ProtectedRouteGuard {

  constructor(private userService: UserService, private router: Router, private authenticationService: AuthenticationService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.authenticationService.userObservable.pipe(
      first(),
      switchMap(() => from(this.userService.getUser())),
      map(() => true),
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 404:
            return of(this.router.parseUrl("/auth/finish-registration"))
          default:
            return of(this.router.parseUrl('/auth/login'));
        }
      })
    )
  }

}
