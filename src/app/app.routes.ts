import {Routes} from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {ComponentDebugPageComponent} from "./pages/component-debug-page/component-debug-page.component";

export const routes: Routes = [
  {path: "", component: LandingPageComponent},
  {path: "cdp", component: ComponentDebugPageComponent},
];
