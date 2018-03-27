import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReactiveFormsModule} from "@angular/forms";
import {Exercise3Component} from "./exercise-3.component";

describe('Exercise3Component', () => {
  let component: Exercise3Component;
  let fixture: ComponentFixture<Exercise3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise3Component],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise3Component);
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
