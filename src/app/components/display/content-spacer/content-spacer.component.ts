import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-content-spacer',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './content-spacer.component.html',
  styleUrl: './content-spacer.component.scss'
})
export class ContentSpacerComponent {

  @Input() vertical: boolean = false;

}
