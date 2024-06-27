import { Component } from '@angular/core';
import {ContentContainerComponent} from "../../../components/display/content-container/content-container.component";
import {TitleLabelComponent} from "../../../components/display/label/title-label/title-label.component";
import {ContentSpacerComponent} from "../../../components/display/content-spacer/content-spacer.component";
import {InputLabelComponent} from "../../../components/display/label/input-label/input-label.component";
import {TextInputComponent} from "../../../components/input/text-input/text-input.component";
import {ButtonInputComponent} from "../../../components/input/button-input/button-input.component";
import {RouterLink} from "@angular/router";
import {IconComponent} from "../../../components/display/icon/icon.component";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    ContentContainerComponent,
    TitleLabelComponent,
    ContentSpacerComponent,
    InputLabelComponent,
    TextInputComponent,
    ButtonInputComponent,
    RouterLink,
    IconComponent
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

}
