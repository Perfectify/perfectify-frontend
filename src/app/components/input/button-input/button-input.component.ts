import {booleanAttribute, Component, Input} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-button-input',
  standalone: true,
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './button-input.component.html',
  styleUrl: './button-input.component.scss'
})
export class ButtonInputComponent {

  @Input() color: string = '';
  @Input({transform: booleanAttribute}) disabled: boolean = false

}
