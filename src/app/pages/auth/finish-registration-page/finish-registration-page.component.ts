import { Component } from '@angular/core';
import {ContentContainerComponent} from "../../../components/display/content-container/content-container.component";
import {IconComponent} from "../../../components/display/icon/icon.component";
import {TitleLabelComponent} from "../../../components/display/label/title-label/title-label.component";
import {ContentSpacerComponent} from "../../../components/display/content-spacer/content-spacer.component";
import {InputLabelComponent} from "../../../components/display/label/input-label/input-label.component";
import {TextInputComponent} from "../../../components/input/text-input/text-input.component";
import {ButtonInputComponent} from "../../../components/input/button-input/button-input.component";

@Component({
  selector: 'app-finish-registration-page',
  standalone: true,
  imports: [
    ContentContainerComponent,
    IconComponent,
    TitleLabelComponent,
    ContentSpacerComponent,
    InputLabelComponent,
    TextInputComponent,
    ButtonInputComponent
  ],
  templateUrl: './finish-registration-page.component.html',
  styleUrl: './finish-registration-page.component.scss'
})
export class FinishRegistrationPageComponent {

}
