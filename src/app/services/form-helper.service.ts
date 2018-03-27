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

  hasErrors(control: AbstractControl, ignoreTouchedState?: boolean): boolean {
    return control && control.errors && control.touched;
  }

  getErrorMessage(control: AbstractControl): string {
    if (!control || !control.errors) {
      return;
    }
    if (control.errors.hasOwnProperty('required')) {
      return 'This is a required field';
    }
    return 'Unknown error';
  }

}
