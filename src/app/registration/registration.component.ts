import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators, FormGroup} from '@angular/forms';

export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  submitted = false;
  registrationForm: FormGroup;

  gender: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'other', viewValue: 'Other'},
  ];

  constructor(public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        userName: new FormControl('', [Validators.required]),
        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(64),
          Validators.pattern(/^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[^\w\s]).{5,}$/)])),
        passwordConfirmation: new FormControl('', Validators.required),
        personalInfo: new FormControl(''),
        gender: new FormControl('', Validators.required),
      }, {
        validator: this.passwordValidate
      }
    )
    ;
  }

  get myForm() {
    return this.registrationForm.controls;
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
