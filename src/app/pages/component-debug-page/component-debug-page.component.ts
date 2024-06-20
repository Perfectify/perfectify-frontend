import { Component } from '@angular/core';
import {IconComponent} from "../../components/display/icon/icon.component";
import {LoadingSpinnerComponent} from "../../components/display/loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-component-debug-page',
  standalone: true,
  imports: [
    IconComponent,
    LoadingSpinnerComponent
  ],
  templateUrl: './component-debug-page.component.html',
  styleUrl: './component-debug-page.component.scss'
})
export class ComponentDebugPageComponent {

}
