import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {customerNumberValidator} from "../validators/customer-number.validator";
import {FormHelperService} from "../services/form-helper.service";

@Component({
  selector: 'app-exercise-5',
  templateUrl: './exercise-5.component.html',
  styleUrls: ['./exercise-5.component.scss']
})
export class Exercise5Component {

  form: FormGroup;
  formData: any;

  constructor(private fb: FormBuilder, public fh: FormHelperService) {
    this.form = fb.group({
      firstName: fb.control('', Validators.required),
      lastName: fb.control('', Validators.required),
      customerNumber: fb.control('', [Validators.required, customerNumberValidator])
    });
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

}
