import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {e164PhoneNumberValidator} from '../validators/e164-phone-number.validator';
import {FormHelperService} from '../form-validation/form-helper.service';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.scss']
})
export class ExampleFormComponent {

  form: FormGroup;
  formData: any;

  constructor(private fb: FormBuilder, public fh: FormHelperService) {
    this.form = fb.group({
      firstName: fb.control('', Validators.required),
      lastName: fb.control('', Validators.required),
      phoneNumbers: fb.array([this.createPhoneNumberFormControl()]),
      backgroundImage: fb.control('', Validators.required)
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
  }

  getPhoneNumbersFormArray(): FormArray {
    return this.form.get('phoneNumbers') as FormArray;
  }

  private createPhoneNumberFormControl(): FormControl {
    return this.fb.control('', [e164PhoneNumberValidator()]);
  }

  toggleDisableForm() {
    if (this.form.disabled) {
      this.form.enable();
    } else {
      this.form.disable();
    }
  }
}
