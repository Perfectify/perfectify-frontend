import {Component} from '@angular/core';
import {LoadingSpinnerComponent} from "../../components/display/loading-spinner/loading-spinner.component";
import {ContentContainerComponent} from "../../components/display/content-container/content-container.component";
import {NgClass, NgIf} from "@angular/common";
import {ResponsiveService} from "../../services/responsive.service";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    LoadingSpinnerComponent,
    ContentContainerComponent,
    NgIf,
    NgClass
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(protected responsiveService: ResponsiveService, private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService.userObservable.subscribe(() => {
      if (this.authenticationService.isAuthenticated()) {
        //TODO User Check
        this.router.navigate(["/dashboard"])
      } else {
        this.router.navigate(["/auth/login"])
      }
    })
  }
}
