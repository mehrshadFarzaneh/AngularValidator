import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";

export class EmailValidator{

  static registredBefor(control: AbstractControl): Promise<ValidationErrors | null>{
    var resultHttp = ["mahmod@gmail.com", "majid@gmial.com"];
    return new Promise((resolve, reject) => {
      if (resultHttp.includes((control.value as string))) {
        resolve({ registredBefor: true });
      } else {
        reject(false);
      }
    });
  }
  static notRegistredBefor(control: AbstractControl): ValidationErrors | null{
    var resultHttp = ["mahmod@gmail.com", "majid@gmial.com","mehrshad.farzaneh.g@gmail.com"];
      if ( !(resultHttp.includes((control.value as string))) ) {
        return ({ notRegistredBefor: true });
      } else {
        return null;
      }
  }
  static validEmail(control: AbstractControl): ValidationErrors | null{
      if ((control.value as string).match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) ) {
        return ({ validEmail: true });
      } else {
        return null;
      }
  }
}
