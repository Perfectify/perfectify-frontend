import {Component} from '@angular/core';
import {LoadingSpinnerComponent} from "../../components/display/loading-spinner/loading-spinner.component";
import {ContentContainerComponent} from "../../components/display/content-container/content-container.component";
import {NgClass, NgIf} from "@angular/common";
import {ResponsiveService} from "../../services/responsive.service";
import {DeviceType} from "../../enums/responsive/device-type";

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

  constructor(protected responsiveService: ResponsiveService) {
  }
}
