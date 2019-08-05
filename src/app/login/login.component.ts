import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {formErrorMessages, FormErrorMessages} from '../form-errors-constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public submitted = false;
  public formValid: boolean;
  public loginForm: FormGroup;
  public formErrorMessages: FormErrorMessages;

  constructor(public readonly formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formErrorMessages = formErrorMessages;

    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): boolean {
    this.submitted = true;
    if (!this.loginForm.valid) {
      this.formValid = false;
      return false;
    }
    this.formValid = true;
    console.log(this.loginForm.value);
  }
}
