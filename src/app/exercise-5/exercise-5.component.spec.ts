import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Exercise5Component} from './exercise-5.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormHelperService} from "../services/form-helper.service";

describe('Exercise5Component', () => {
  let component: Exercise5Component;
  let fixture: ComponentFixture<Exercise5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise5Component],
      imports: [ReactiveFormsModule],
      providers: [FormHelperService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.form).toBeTruthy();
  });

  it('should not save when no input is entered', () => {
    expect(component.formData).toBeUndefined();
    component.onSubmit();
    fixture.detectChanges();
    expect(component.form.invalid).toBe(true);
    expect(component.formData).toBeUndefined();
  });

  it('should save when each input is valid', () => {
    const expectedFormData = {
      firstName: 'Max',
      lastName: 'Mustermann',
      customerNumber: 'C100ABCDEF'
    };
    expect(component.formData).toBeUndefined();

    component.form.patchValue(expectedFormData);
    component.onSubmit();

    expect(component.form.valid).toBe(true);
    expect(component.formData).toEqual(expectedFormData);
  });

});
