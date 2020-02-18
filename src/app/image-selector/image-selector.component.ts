import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {NgbSlideEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageSelectorComponent),
      multi: true
    }
  ]
})
export class ImageSelectorComponent implements ControlValueAccessor {
  public readonly images = [322, 121, 984].map((n) => `https://picsum.photos/id/${n}/1800/400`);

  private _value: string;
  private isDisabled: boolean;

  set value(value: string) {
    this._value = value;
    this.onChange(value);
  }

  get value(): string {
    return this._value;
  }

  private onChange = (_: string) => {
  };

  constructor() {
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  registerOnChange(fn: (_: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(value: string): void {
    this.value = value;
  }

  slideChanged(slideEvent: NgbSlideEvent) {
    this.value = slideEvent.current;
  }
}
