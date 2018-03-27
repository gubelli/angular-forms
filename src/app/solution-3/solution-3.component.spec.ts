import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Solution3Component} from './solution-3.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormHelperService} from "../services/form-helper.service";

describe('Solution3Component', () => {
  let component: Solution3Component;
  let fixture: ComponentFixture<Solution3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Solution3Component],
      imports: [ReactiveFormsModule],
      providers: [FormHelperService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Solution3Component);
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
