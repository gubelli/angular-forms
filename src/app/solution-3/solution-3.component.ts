import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormHelperService} from "../services/form-helper.service";

@Component({
  selector: 'app-solution-3',
  templateUrl: './solution-3.component.html',
  styleUrls: ['./solution-3.component.scss']
})
export class Solution3Component {

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

}
