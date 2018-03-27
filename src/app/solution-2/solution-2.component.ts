import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-solution-2',
  templateUrl: './solution-2.component.html',
  styleUrls: ['./solution-2.component.scss']
})
export class Solution2Component {

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
