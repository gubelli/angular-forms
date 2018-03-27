import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormHelperService} from "../services/form-helper.service";

@Component({
  selector: 'app-exercise-4',
  templateUrl: './exercise-4.component.html',
  styleUrls: ['./exercise-4.component.scss']
})
export class Exercise4Component {

  form: FormGroup;
  formData: any;

  constructor(private fb: FormBuilder, public fh: FormHelperService) {
    this.form = fb.group({
      firstName: fb.control('', Validators.required),
      lastName: fb.control('', Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.formData = this.form.value;
    }
  }

  resetForm() {
    this.form.reset();
  }

}
