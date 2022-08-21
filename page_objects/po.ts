import {
  OriginPage,
  LoginPage,
  Header,
  DeviceAllPage,
  RegisterPage,
  MenuOrigin,
  ForgotPasswordPage,
} from './pages'


export const webPages = () => ({
  originPage: new OriginPage(),
  loginPage: new LoginPage(),
  header: new Header(),
  deviceAllPage: new DeviceAllPage(),
  registerPage: new RegisterPage(),
  menu: new MenuOrigin(),
  forgotPasswordPage: new ForgotPasswordPage(),
})
