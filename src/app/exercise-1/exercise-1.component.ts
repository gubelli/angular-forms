import {Component} from '@angular/core';

@Component({
  selector: 'app-exercise-1',
  templateUrl: './exercise-1.component.html',
  styleUrls: ['./exercise-1.component.scss']
})
export class Exercise1Component {

  formData: any; // set all the form values as json object into that object once the form is being submitted

  constructor() {
  }

}
