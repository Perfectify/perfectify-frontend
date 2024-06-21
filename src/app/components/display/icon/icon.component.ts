import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {

  @ViewChild('iconSvg', { static: true }) iconSvg!: ElementRef<SVGElement>;

  draw() {
    this.iconSvg.nativeElement.classList.add("active")
  }

  erase() {
    this.iconSvg.nativeElement.classList.remove("active")
  }

  toggle() {
    this.iconSvg.nativeElement.classList.toggle("active")
  }

}
