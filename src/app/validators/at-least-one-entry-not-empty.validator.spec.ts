import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {atLeastOneEntryNotEmptyValidator} from "./at-least-one-entry-not-empty.validator";
import {inject, TestBed} from "@angular/core/testing";

describe('atLeastOneEntryNotEmptyValidator', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule]
    });
  });

  const validatorFn = atLeastOneEntryNotEmptyValidator;

  it('should return undefined if at least one entry is not empty', inject([FormBuilder], (fb: FormBuilder) => {
    const formControl1 = fb.control('');
    const formControl2 = fb.control('VALID');
    const formControl3 = fb.control('');
    const formArray = fb.array([formControl1, formControl2, formControl3]);

    expect(validatorFn(formArray)).toBeUndefined();
  }));

  it('should return {allEntriesEmpty: true} if all entries are empty', inject([FormBuilder], (fb: FormBuilder) => {
    const expectedErrorObject = {allEntriesEmpty: true};
    const formControl1 = fb.control('');
    const formControl2 = fb.control('');
    const formControl3 = fb.control('');
    const formArray = fb.array([formControl1, formControl2, formControl3]);

    expect(validatorFn(formArray)).toEqual(expectedErrorObject);
  }));

});
