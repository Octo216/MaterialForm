import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {ValidatePassword} from './validate-password';
import {FormErrorMessages, formErrorMessages} from '../form-errors-constant';

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
  public submitted = false;
  public formValid: boolean;
  public registrationForm: FormGroup;
  public formErrorMessages: FormErrorMessages;

  public gender: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'other', viewValue: 'Other'},
  ];

  constructor(public readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formErrorMessages = formErrorMessages;

    this.registrationForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        userName: ['', [Validators.required]],
        password: ['', Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(64),
          Validators.pattern(/^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[^\w\s]).{5,}$/)])],
        passwordConfirmation: ['', [Validators.required]],
        personalInfo: [''],
        gender: ['', Validators.required],
      }, {
        validator: ValidatePassword.MatchPassword
      }
    )
    ;
  }

  onSubmit(): boolean {
    this.submitted = true;
    if (!this.registrationForm.valid) {
      this.formValid = false;
      return false;
    }
    this.formValid = true;
    console.log(this.registrationForm.value);
  }

  selectGender(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.registrationForm.get('gender').setValue(target.value, {onlySelf: true});
  }
}
