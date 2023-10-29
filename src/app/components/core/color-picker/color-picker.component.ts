import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {
  @Input() label: string = 'Label';
  @Input() value: string = '';

  @Output() onChangeValue = new EventEmitter<string>();
  changeValue(value: string) {
    this.onChangeValue.emit(value);

  }

}
