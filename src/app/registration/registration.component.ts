import {Component} from '@angular/core';
import {FormBuilder, FormArray, Validators, FormGroup} from '@angular/forms';

export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  submitted = false;

  gender: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'other', viewValue: 'Other'},
  ];

  constructor(public fb: FormBuilder) {
  }

  registrationForm = this.fb.group({
    email: ['',
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')],
    userName: ['', [Validators.required]],
    PasswordValidation: this.fb.group({
      password: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(64),
        Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$'
        )]],
      passwordConfirmation: ['', Validators.required]
    }, {
      validators: this.passwordValidate
    }),
    personalInfo: [''],
    gender: ['', Validators.required],
    addDynamicElement: this.fb.array([])
  });

  get myForm() {
    return this.registrationForm.controls;
  }

  get addDynamicElement() {
    return this.registrationForm.get('addDynamicElement') as FormArray;
  }

  addSuperPowers() {
    this.addDynamicElement.push(this.fb.control(''));
  }

  onSubmit() {
    this.submitted = true;
    if (!this.registrationForm.valid) {
      alert('Please fill all the required fields to create a super hero!');
      return false;
    } else {
      console.log(this.registrationForm.value);
    }
  }

  selectGender(e) {
    this.registrationForm.get('gender').setValue(e.target.value, {
      onlySelf: true
    });
  }

  passwordValidate(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.passwordConfirmation.value;

    return pass === confirmPass ? null : {notSame: true};
  }
}
