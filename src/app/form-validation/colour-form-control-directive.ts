import {Directive, HostBinding} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({selector: '[formControlName]'})
export class ColourFormControlDirective {
  constructor(private ngControl: NgControl) {
  }

  @HostBinding('class.is-invalid')
  get isInvalid() {
    return this.control.invalid && this.control.dirty;
  }

  @HostBinding('class.is-valid')
  get isValid() {
    return this.control.valid && this.control.dirty;
  }

  get control() {
    return this.ngControl.control;
  }
}
