import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExampleFormComponent} from './example-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormHelperService} from "../form-validation/form-helper.service";

describe('ExampleFormComponent', () => {
  let component: ExampleFormComponent;
  let fixture: ComponentFixture<ExampleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleFormComponent],
      imports: [ReactiveFormsModule],
      providers: [FormHelperService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFormComponent);
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
    const expectedFormData = {firstName: 'Max', lastName: 'Mustermann', phoneNumbers: ['+41 79 123 45 67']};
    expect(component.formData).toBeUndefined();

    component.form.patchValue(expectedFormData);
    component.onSubmit();

    expect(component.form.valid).toBe(true);
    expect(component.form.valid).toBe(true);
    expect(component.formData).toEqual(expectedFormData);
  });

});
