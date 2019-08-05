export interface FormErrorMessages {
  validRegistrationForm: string;
  invalidRegistrationForm: string;
  validLogInForm: string;
  invalidLogInForm: string;
  userName: {
    require: string,
  };
  email: {
    require: string,
    pattern: string,
  };
  password: {
    require: string,
    minLength: string,
    maxLength: string,
    pattern: string,
  };
  passwordConfirmation: {
    require: string,
    match: string,
  };
  gender: {
    require: string,
  };
}

export const formErrorMessages: FormErrorMessages = {
  validRegistrationForm: 'Registration successful',
  invalidRegistrationForm: 'Registration unsuccessful',
  validLogInForm: 'Log in successful',
  invalidLogInForm: 'Log in unsuccessful',
  userName: {
    require: 'Please enter your username',
  },
  email: {
    require: 'Please enter a valid email address',
    pattern: 'Email address should look like this email@domain.com',
  },
  password: {
    require: 'Please enter your password',
    minLength: 'Your password too short, min length 5 characters',
    maxLength: 'Your password too long, max length 64 characters',
    pattern: 'Your password should contain at least 1 letter, 1 digit and 1 special character',
  },
  passwordConfirmation: {
    require: 'Please repeat password',
    match: 'Entered passwords doesn\'t match',
  },
  gender: {
    require: 'Please enter your gender',
  },
};
