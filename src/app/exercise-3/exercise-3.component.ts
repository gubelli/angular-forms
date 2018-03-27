import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-exercise-3',
  templateUrl: './exercise-3.component.html',
  styleUrls: ['./exercise-3.component.scss']
})
export class Exercise3Component {

  form: FormGroup;
  formData: any;

  constructor(private fb: FormBuilder) {
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
}
