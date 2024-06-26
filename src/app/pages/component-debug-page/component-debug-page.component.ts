import { Component } from '@angular/core';
import {IconComponent} from "../../components/display/icon/icon.component";
import {LoadingSpinnerComponent} from "../../components/display/loading-spinner/loading-spinner.component";
import {ContentContainerComponent} from "../../components/display/content-container/content-container.component";
import {TextInputComponent} from "../../components/input/text-input/text-input.component";
import {ButtonInputComponent} from "../../components/input/button-input/button-input.component";

@Component({
  selector: 'app-component-debug-page',
  standalone: true,
  imports: [
    IconComponent,
    LoadingSpinnerComponent,
    ContentContainerComponent,
    TextInputComponent,
    ButtonInputComponent
  ],
  templateUrl: './component-debug-page.component.html',
  styleUrl: './component-debug-page.component.scss'
})
export class ComponentDebugPageComponent {

}
