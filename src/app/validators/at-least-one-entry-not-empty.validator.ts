import {FormArray} from '@angular/forms';

export function atLeastOneEntryNotEmptyValidator(control: FormArray): { [s: string]: boolean } {
  if (!control.value || control.value.every(value => !value.trim())) {
    return {allEntriesEmpty: true};
  }
}
