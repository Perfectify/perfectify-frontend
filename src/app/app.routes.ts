import {Routes} from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {ComponentDebugPageComponent} from "./pages/component-debug-page/component-debug-page.component";
import {LoginPageComponent} from "./pages/auth/login-page/login-page.component";
import {RegisterPageComponent} from "./pages/auth/register-page/register-page.component";
import {ResetPasswordPageComponent} from "./pages/auth/reset-password-page/reset-password-page.component";
import {LogoutPageComponent} from "./pages/auth/logout-page/logout-page.component";
import {
  FinishRegistrationPageComponent
} from "./pages/auth/finish-registration-page/finish-registration-page.component";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {ProtectedRouteGuard} from "./security/protected-route-guard";
import {UnprotectedRouteGuard} from "./security/unprotected-route-guard";

export const routes: Routes = [
  {path: "", component: LandingPageComponent},
  {path: "cdp", component: ComponentDebugPageComponent},
  {
    path: "auth", children: [
      {path: "login", canActivate: [UnprotectedRouteGuard], component: LoginPageComponent},
      {path: "logout", component: LogoutPageComponent},
      {path: "register", canActivate: [UnprotectedRouteGuard], component: RegisterPageComponent},
      {path: "reset-password", canActivate: [UnprotectedRouteGuard], component: ResetPasswordPageComponent},
      {path: "finish-registration", component: FinishRegistrationPageComponent},
    ]
  },
  {
    path: "dashboard",
    component: DashboardPageComponent,
    canActivate: [ProtectedRouteGuard]
  }
];
