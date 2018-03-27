import {FormControl} from '@angular/forms';

export function customerNumberValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value || !control.value.match(/^C100/) || control.value.length !== 10) {
    return {invalidCustomerNumber: true};
  }
}
