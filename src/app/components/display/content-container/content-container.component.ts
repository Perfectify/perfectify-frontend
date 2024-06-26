import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-content-container',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './content-container.component.html',
  styleUrl: './content-container.component.scss'
})
export class ContentContainerComponent {

  @Input() visible: boolean = true;

}
