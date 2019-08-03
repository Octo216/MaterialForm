import {AbstractControl} from '@angular/forms';

export class ValidatePassword {

  static MatchPassword(abstractControl: AbstractControl) {
    const password = abstractControl.get('password').value;
    const confirmPassword = abstractControl.get('passwordConfirmation').value;
    if (password !== confirmPassword) {
      abstractControl.get('passwordConfirmation').setErrors({
        MatchPassword: true
      });
    } else {
      return null;
    }
  }
}
