import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Solution5Component} from './solution-5.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormHelperService} from "../services/form-helper.service";

describe('Solution5Component', () => {
  let component: Solution5Component;
  let fixture: ComponentFixture<Solution5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Solution5Component],
      imports: [ReactiveFormsModule],
      providers: [FormHelperService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Solution5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.form).toBeTruthy();
  });

  it('should be possible to add a new phone number', () => {
    const prevLength = component.form.value.phoneNumbers.length;

    component.addPhone();
    expect(component.form).toBeTruthy();
    expect(component.form.value.phoneNumbers.length).toBe(prevLength + 1);
  });

  it('should be possible to remove a new phone number', () => {
    const prevLength = component.form.value.phoneNumbers.length;

    component.removePhoneAt(0);
    expect(component.form).toBeTruthy();
    expect(component.form.value.phoneNumbers.length).toBe(prevLength - 1);
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
      customerNumber: 'C100ABCDEF',
      phoneNumbers: ['+41791231057']
    };
    expect(component.formData).toBeUndefined();

    component.form.patchValue(expectedFormData);
    component.onSubmit();

    expect(component.form.valid).toBe(true);
    expect(component.formData).toEqual(expectedFormData);
  });

});
