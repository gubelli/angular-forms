import {ContentChild, Directive, HostBinding} from "@angular/core";
import {FormControlName} from "@angular/forms";

@Directive({selector: '[formControlName]'})
export class MarkAsInvalidDirective {

  @ContentChild(FormControlName)
  formControlName: FormControlName;

  constructor() {
  }

  @HostBinding('class.is-invalid')
  get isInvalid() {
    return this.formControlName.invalid && this.formControlName.touched;
  }

  @HostBinding('class.is-valid')
  get isValid() {
    return this.formControlName.valid && this.formControlName.touched;
  }

}
