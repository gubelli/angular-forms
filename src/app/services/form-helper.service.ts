import {Injectable} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup} from "@angular/forms";

@Injectable()
export class FormHelperService {

  constructor() {
  }

  getValidInvalidClassName(control: AbstractControl): string {
    if (control && control.touched) {
      if (control.errors) {
        return 'is-invalid';
      }
      return 'is-valid';
    }
  }

  hasErrors(control: AbstractControl): boolean {
    return control && control.errors && control.touched;
  }

  getErrorMessage(control: AbstractControl): string {
    if (!control || !control.errors) {
      return;
    }
    if (control.errors.hasOwnProperty('required')) {
      return 'This is a required field';
    } else if (control.errors.hasOwnProperty('invalidCustomerNumber')) {
      return 'This is an invalid customer number';
    }
    return 'Unknown error';
  }

  markAllControlsAsTouched(control: AbstractControl) {
    if (control instanceof FormControl) {
      control.markAsTouched();
      return;
    }

    if (control instanceof FormGroup) {
      const controls = (control as FormGroup).controls;
      Object.keys(controls).map(x => control.controls[x]).forEach(c => this.markAllControlsAsTouched(c));
    }

    if (control instanceof FormArray) {
      const controls = (control as FormArray).controls;
      Object.keys(controls).map(x => control.controls[x]).forEach(c => this.markAllControlsAsTouched(c));
    }
  }

}
