import {FormBuilder, FormControl, ReactiveFormsModule} from "@angular/forms";
import {inject, TestBed} from "@angular/core/testing";
import {customerNumberValidator} from "./customer-number.validator";

describe('customerNumberValidator', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule]
    });
  });

  const validatorFn = customerNumberValidator;

  it('should return undefined if valid customer number', () => {
    expect(validatorFn(new FormControl('C100567890'))).toBeUndefined();
  });

  it('should return {invalidCustomerNumber: true} if customer number is invalid', inject([FormBuilder], (fb: FormBuilder) => {
    const expectedErrorObject = {invalidCustomerNumber: true};
    expect(validatorFn(new FormControl('X250567890'))).toEqual(expectedErrorObject);
    expect(validatorFn(new FormControl('8250567890'))).toEqual(expectedErrorObject);
    expect(validatorFn(new FormControl('Cabcdefghi'))).toEqual(expectedErrorObject);
    expect(validatorFn(new FormControl(''))).toEqual(expectedErrorObject);
  }));

});
