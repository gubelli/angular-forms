import {userNameAsyncValidator} from './user-name-async-validator.directive';
import {FormControl, ValidationErrors} from '@angular/forms';
import {of} from 'rxjs/internal/observable/of';
import {UserName} from './dto/UserName';
import {Observable} from 'rxjs/Observable';

describe('user-name-async-validator', () => {
  const existingUsers: UserName[] = [
    {
      shortName: 'existingUser'
    }
  ];
  const httpClientMock: any = {
    get: () => of(existingUsers)
  };

  it('should return error if user name already taken', (done) => {
    const asyncValidatorFn =
      userNameAsyncValidator(httpClientMock)(new FormControl('existingUser')) as Observable<ValidationErrors | null>;
    asyncValidatorFn.subscribe((result) => {
      expect(result).toEqual({userNameTaken: true});
      done();
    });
  });

  it('should return no error if user name is not taken', (done) => {
    const asyncValidatorFn =
      userNameAsyncValidator(httpClientMock)(new FormControl('nonExistingUser')) as Observable<ValidationErrors | null>;
    asyncValidatorFn.subscribe((result) => {
      expect(result).toEqual(null);
      done();
    });
  });
});
