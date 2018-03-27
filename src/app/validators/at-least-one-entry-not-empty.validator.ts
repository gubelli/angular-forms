import {FormArray} from '@angular/forms';

export function atLeastOneEntryNotEmptyValidator(control: FormArray): { [s: string]: boolean } {
  console.log(control);
  if (!control.value || control.value.every(value => !value || !value.trim())) {
    return {allEntriesEmpty: true};
  }
}
