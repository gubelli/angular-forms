import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-solution-1',
  templateUrl: './solution-1.component.html',
  styleUrls: ['./solution-1.component.scss']
})
export class Solution1Component {

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
