import {Routes} from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {ComponentDebugPageComponent} from "./pages/component-debug-page/component-debug-page.component";
import {LoginPageComponent} from "./pages/auth/login-page/login-page.component";
import {RegisterPageComponent} from "./pages/auth/register-page/register-page.component";

export const routes: Routes = [
  {path: "", component: LandingPageComponent},
  {path: "cdp", component: ComponentDebugPageComponent},
  {
    path: "auth", children: [
      {path: "login", component: LoginPageComponent},
      {path: "register", component: RegisterPageComponent}
    ]
  }
];
