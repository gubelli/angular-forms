import {FormControl, ValidatorFn} from '@angular/forms';

const E164_PHONE_NUMBER_PATTERN = new RegExp('^\\+\\d{2,15}$');

export function e164PhoneNumberValidator(): ValidatorFn {
  return (control: FormControl): { [key: string]: boolean } => {
    // note: validations could also be made for FormGroup and FormArray in the same way
    const value = (control.value || '').replace(/\s/g, '');
    if (!value || !E164_PHONE_NUMBER_PATTERN.test(value)) {
      return {invalidE164PhoneNumber: true};
    }
  };
}
