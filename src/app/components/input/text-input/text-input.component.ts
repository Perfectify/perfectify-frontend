import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {

  @Input() placeholder: string = "";

  @Input() type: string = "text";

  @Input() value: any = "";

  @Output() valueChange = new EventEmitter();

  updateValue(newValue: any) {
    this.value = newValue
    this.valueChange.emit(this.value)
  }

}
