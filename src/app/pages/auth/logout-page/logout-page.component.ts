import { Component } from '@angular/core';
import {LoadingSpinnerComponent} from "../../../components/display/loading-spinner/loading-spinner.component";
import {ContentContainerComponent} from "../../../components/display/content-container/content-container.component";
import {TitleLabelComponent} from "../../../components/display/label/title-label/title-label.component";
import {ContentSpacerComponent} from "../../../components/display/content-spacer/content-spacer.component";

@Component({
  selector: 'app-logout-page',
  standalone: true,
  imports: [
    LoadingSpinnerComponent,
    ContentContainerComponent,
    TitleLabelComponent,
    ContentSpacerComponent
  ],
  templateUrl: './logout-page.component.html',
  styleUrl: './logout-page.component.scss'
})
export class LogoutPageComponent {

}
