import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {customerNumberValidator} from "../validators/customer-number.validator";
import {FormHelperService} from "../services/form-helper.service";
import {atLeastOneEntryNotEmptyValidator} from "../validators/at-least-one-entry-not-empty.validator";

@Component({
  selector: 'app-solution-5',
  templateUrl: './solution-5.component.html',
  styleUrls: ['./solution-5.component.scss']
})
export class Solution5Component {

  form: FormGroup;
  formData: any;

  constructor(private fb: FormBuilder, public fh: FormHelperService) {
    this.form = fb.group({
      firstName: fb.control('', Validators.required),
      lastName: fb.control('', Validators.required),
      customerNumber: fb.control('', [Validators.required, customerNumberValidator]),
      phoneNumbers: fb.array([this.createPhoneNumberFormControl()], atLeastOneEntryNotEmptyValidator)
    });
  }

  removePhoneAt(index: number) {
    this.getPhoneNumbersFormArray().removeAt(index);
  }

  addPhone() {
    this.getPhoneNumbersFormArray().push(this.createPhoneNumberFormControl());
  }

  onSubmit() {
    if (this.form.invalid) {
      this.fh.markAllControlsAsTouched(this.form);
      return;
    }
    this.formData = this.form.value;
  }

  resetForm() {
    this.form.reset();
    this.formData = undefined;
  }

  getPhoneNumbersFormArray(): FormArray {
    return this.form.get('phoneNumbers') as FormArray;
  }

  private createPhoneNumberFormControl(): FormControl {
    return this.fb.control('', [Validators.maxLength(15)]);
  }

}
