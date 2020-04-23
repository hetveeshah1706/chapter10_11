import { AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { user_model } from './async-demo/user_model';
import { UserServiceService } from './async-demo/user-service.service';


export class DuplicateEmailCheck {
  static checkEmail(_serviceObj: UserServiceService): AsyncValidatorFn {

    let res = [
      new user_model('John123@gmail.com', 'John'),
      new user_model('Jack123@gmail.com', 'Jack'),
       new user_model('Jinal123@gmail.com', 'Jinal'),
    ];

    return (c: AbstractControl): Observable<{ [key: string]: boolean } | null> => {

      if (c.value != null && c.value != '') {

          return from([res]).pipe(
           map((res: user_model[]) => {
            if (res.length != 0) {

              let matched: boolean = false;
              for (let index = 0; index < res.length; index++) {
                  if (res[index].user_email == c.value) {
                  matched = true;
                  break;
                }
              }

              if (matched) {
                return { duplicateEmail: true };
              } else {
                  return null;
              }

            } else {
                return null;
            }

           })
         );
      }

      return of(null);
    };
  }

}
