import {Component, ContentChild} from '@angular/core';
import {FormControlName} from '@angular/forms';

@Component({
  selector: '[app-append-error-message]',
  templateUrl: './append-error-message.component.html',
  styleUrls: ['./append-error-message.component.scss']
})
export class AppendErrorMessageComponent {

  @ContentChild(FormControlName)
  formControlName: FormControlName;

  constructor() {
  }

  getFirstErrorMessage() {
    const key = Object.keys(this.formControlName.errors)[0];
    switch (key) {
      case 'allEntriesEmpty':
        return 'At least one entry must be non empty';
      case 'invalidE164PhoneNumber':
        return 'This is an invalid phone number';
      case 'maxlength':
        return 'Your entry is too long. Max ' + this.formControlName.errors[key].requiredLength + ' chars)';
      case 'required':
        return 'This is a required field';
      default:
        return '';
    }
  }

}
