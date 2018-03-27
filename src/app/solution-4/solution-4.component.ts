import {Component} from '@angular/core';
import {customerNumberValidator} from "../validators/customer-number.validator";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormHelperService} from "../services/form-helper.service";

@Component({
  selector: 'app-solution-4',
  templateUrl: './solution-4.component.html',
  styleUrls: ['./solution-4.component.scss']
})
export class Solution4Component {

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
  }
}
