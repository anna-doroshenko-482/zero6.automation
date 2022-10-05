import { mobilePhoneGeneration, randomInteger, stringGenerator } from '../../helpers'


export const registerData = {
  firstNameAdmin: 'FirstName',
  lastNameAdmin: 'LastName',
  emailAdmin: `email${stringGenerator(5)}@gmail.com`,
  telephoneAdmin: mobilePhoneGeneration(),
  passwordAdmin: 'password0',

  thanksRegisterMessage: 'Thanks for registering as a user on the marketplace',
  haveLoginText: 'Already have an account?',
  errorRegister: 'Could not register with supplied credentials',
  errorName: 'Incorrect. Please, try again',
  errorEmail: 'Email must be a valid email',
  errorPhone: 'Telephone must be at least 10 characters',
  errorPas: 'Password length should be minimum 6 characters and consist of latin letters and at least one number',
  errorTermConditions: 'Please agree to all terms and condition',
  incorrectFirstName: 'fN%&^&',
  incorrectLastName: 'lN^**&(*',
  incorrectEmail: 'email.com',
  incorrectTelephone: '963^$',
  incorrectPassword: 'pas',

}
