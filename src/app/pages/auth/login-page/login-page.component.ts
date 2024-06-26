import { Component } from '@angular/core';
import {ContentContainerComponent} from "../../../components/display/content-container/content-container.component";
import {TitleLabelComponent} from "../../../components/display/label/title-label/title-label.component";
import {InputLabelComponent} from "../../../components/display/label/input-label/input-label.component";
import {TextInputComponent} from "../../../components/input/text-input/text-input.component";
import {IconComponent} from "../../../components/display/icon/icon.component";
import {ButtonInputComponent} from "../../../components/input/button-input/button-input.component";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {CheckboxInputComponent} from "../../../components/input/checkbox-input/checkbox-input.component";
import {ResponsiveService} from "../../../services/responsive.service";
import {ContentSpacerComponent} from "../../../components/display/content-spacer/content-spacer.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ContentContainerComponent,
    TitleLabelComponent,
    InputLabelComponent,
    TextInputComponent,
    IconComponent,
    ButtonInputComponent,
    NgOptimizedImage,
    CheckboxInputComponent,
    NgClass,
    ContentSpacerComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  constructor(protected responsiveService: ResponsiveService) {
  }

}
