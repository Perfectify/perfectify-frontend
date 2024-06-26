import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-checkbox-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './checkbox-input.component.html',
  styleUrl: './checkbox-input.component.scss'
})
export class CheckboxInputComponent {

  @Input() value: boolean = false;

  @Output() valueChange = new EventEmitter();

  updateValue(newValue: boolean) {
    this.value = newValue
    this.valueChange.emit(this.value)
  }

  click() {
    this.updateValue(!this.value)
  }

}
