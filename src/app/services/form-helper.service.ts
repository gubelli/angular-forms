import {Injectable} from '@angular/core';
import {AbstractControl} from "@angular/forms";

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
    } else if (control.errors.hasOwnProperty('allEntriesEmpty')) {
      return 'At least one entry must be non empty';
    } else if (control.errors.hasOwnProperty('maxlength')) {
      return 'Your input is too long';
    }
    return 'Unknown error';
  }

}
