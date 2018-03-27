import {Injectable} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup} from "@angular/forms";

@Injectable()
export class FormHelperService {

  constructor() {
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
