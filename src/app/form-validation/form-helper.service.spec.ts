import {inject, TestBed} from '@angular/core/testing';

import {FormHelperService} from './form-helper.service';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

describe('FormHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [FormHelperService]
    });
  });

  it('should be created', inject([FormHelperService], (service: FormHelperService) => {
    expect(service).toBeTruthy();
  }));

  it('should mark a FormControl as touched', inject([FormHelperService], (service: FormHelperService) => {
    const formControl = new FormControl();
    expect(formControl.touched).toBe(false);
    service.markAllControlsAsTouched(formControl);
    expect(formControl.touched).toBe(true);
  }));

  it('should mark a FormGroup as touched', inject([FormHelperService], (service: FormHelperService) => {
    const formGroup = new FormGroup({formControl: new FormControl()});
    expect(formGroup.touched).toBe(false);
    service.markAllControlsAsTouched(formGroup);
    expect(formGroup.touched).toBe(true);
  }));

  it('should mark a FormArray as touched', inject([FormHelperService], (service: FormHelperService) => {
    const formGroup = new FormArray([new FormControl()]);
    expect(formGroup.touched).toBe(false);
    service.markAllControlsAsTouched(formGroup);
    expect(formGroup.touched).toBe(true);
  }));

  it('should mark inner objects of a FormGroup as touched', inject([FormBuilder, FormHelperService], (fb: FormBuilder, service: FormHelperService) => {
    const formControl = fb.control('');
    const formControlInArray = fb.control('');
    const formArray = fb.array([formControlInArray]);
    const formGroup = fb.group({
      formControl: formControl,
      formArray: formArray
    });

    expect(formGroup.touched).toBe(false);
    expect(formControl.touched).toBe(false);
    expect(formArray.touched).toBe(false);
    expect(formControlInArray.touched).toBe(false);

    service.markAllControlsAsTouched(formGroup);

    expect(formGroup.touched).toBe(true);
    expect(formControl.touched).toBe(true);
    expect(formArray.touched).toBe(true);
    expect(formControlInArray.touched).toBe(true);
  }));

});
