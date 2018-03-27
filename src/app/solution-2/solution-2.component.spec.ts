import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Solution2Component} from './solution-2.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('Solution2Component', () => {
  let component: Solution2Component;
  let fixture: ComponentFixture<Solution2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Solution2Component],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Solution2Component);
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
