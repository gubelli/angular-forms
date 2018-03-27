import {inject, TestBed} from '@angular/core/testing';

import {FormHelperService} from './form-helper.service';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

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

  describe('getValidInvalidClassName', () => {
    it('should return undefined if control is untouched', inject([FormHelperService], (service: FormHelperService) => {
      const formControl = new FormControl('', [Validators.required]);
      expect(service.getValidInvalidClassName(formControl)).toBeUndefined();
    }));

    it('should return is-valid if control is touched and valid', inject([FormHelperService], (service: FormHelperService) => {
      const formControl = new FormControl('foo', [Validators.required]);
      formControl.markAsTouched();
      expect(service.getValidInvalidClassName(formControl)).toBe('is-valid');
    }));

    it('should return is-invalid if control is touched and invalid', inject([FormHelperService], (service: FormHelperService) => {
      const formControl = new FormControl('', [Validators.required]);
      formControl.markAsTouched();
      expect(service.getValidInvalidClassName(formControl)).toBe('is-invalid');
    }));
  });

  describe('hasErrors', () => {
    it('should return falsy if control is untouched', inject([FormHelperService], (service: FormHelperService) => {
      const formControl = new FormControl('', [Validators.required]);
      expect(service.hasErrors(formControl)).toBeFalsy();
    }));

    it('should return falsy if control is touched and valid', inject([FormHelperService], (service: FormHelperService) => {
      const formControl = new FormControl('foo', [Validators.required]);
      formControl.markAsTouched();
      expect(service.hasErrors(formControl)).toBeFalsy();
    }));

    it('should return true if control is touched and invalid', inject([FormHelperService], (service: FormHelperService) => {
      const formControl = new FormControl('', [Validators.required]);
      formControl.markAsTouched();
      expect(service.hasErrors(formControl)).toBe(true);
    }));
  });

  describe('getErrorMessage', () => {
    it('should return \'This is a required field\' if control requires non empty value but is empty', inject([FormHelperService], (service: FormHelperService) => {
      const formControl = new FormControl('', [Validators.required]);
      expect(service.getErrorMessage(formControl)).toBe('This is a required field');
    }));
  });

  describe('markAllControlsAsTouched', () => {
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
  })

});
