import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Exercise2Component} from './exercise-2.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('Exercise2Component', () => {
  let component: Exercise2Component;
  let fixture: ComponentFixture<Exercise2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise2Component],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise2Component);
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
      lastName: 'Mustermann'
    };
    expect(component.formData).toBeUndefined();

    component.form.patchValue(expectedFormData);
    component.onSubmit();

    expect(component.form.valid).toBe(true);
    expect(component.formData).toEqual(expectedFormData);
  });
});
