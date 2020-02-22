import {Directive} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {UserName} from './dto/UserName';
import {delay, map} from 'rxjs/operators';

export const userNameAsyncValidator = (http: HttpClient): AsyncValidatorFn => {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const userName = control.value;
    return http.get<UserName[]>('assets/users.json').pipe(
      delay(2000),
      map(users => users.filter(user => user.shortName === userName)),
      map(users => users.length > 0 ? {userNameTaken: true} : null)
    );
  };
};

@Directive({
  selector: '[appUserNameAsyncValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UserNameAsyncValidatorDirective, multi: true}]
})
export class UserNameAsyncValidatorDirective implements AsyncValidator {
  constructor(private http: HttpClient) {
  }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return userNameAsyncValidator(this.http)(control) as Observable<ValidationErrors | null>;
  }
}
