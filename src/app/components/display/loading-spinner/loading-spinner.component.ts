import {Component, ElementRef, ViewChild} from '@angular/core';
import {IconComponent} from "../icon/icon.component";
import {interval} from "rxjs";

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss'
})
export class LoadingSpinnerComponent {

  @ViewChild('iconComponent', {static: true}) iconComponent!: IconComponent;

  ngAfterViewInit() {
    interval(1250).subscribe(() => {
      this.iconComponent.toggle()
    })
  }

}
