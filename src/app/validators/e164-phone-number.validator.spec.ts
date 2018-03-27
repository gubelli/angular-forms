import {e164PhoneNumberValidator} from "./e164-phone-number.validator";
import {FormControl} from "@angular/forms";

describe('e164PhoneNumberValidator', () => {

  const validatorFn = e164PhoneNumberValidator();

  it('should return undefined if valid E164 phone number', () => {
    expect(validatorFn(new FormControl("+41442364897"))).toBeUndefined();
    expect(validatorFn(new FormControl("+41 44 236 48 97"))).toBeUndefined();
    expect(validatorFn(new FormControl("+18732463548984"))).toBeUndefined();
    expect(validatorFn(new FormControl("+492589872246"))).toBeUndefined();
  });

  it('should return {invalidE164PhoneNumber: true} if invalid E164 phone number', () => {
    const expectedErrorObject = {invalidE164PhoneNumber: true};
    expect(validatorFn(new FormControl(""))).toEqual(expectedErrorObject);
    expect(validatorFn(new FormControl(null))).toEqual(expectedErrorObject);
    expect(validatorFn(new FormControl(undefined))).toEqual(expectedErrorObject);
    expect(validatorFn(new FormControl("044 236 48 97"))).toEqual(expectedErrorObject);
    expect(validatorFn(new FormControl("abd"))).toEqual(expectedErrorObject);
    expect(validatorFn(new FormControl("+492589ab"))).toEqual(expectedErrorObject);
  });
});
