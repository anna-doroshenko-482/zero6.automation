import {
  OriginPage,
  LoginPage,
  HomePage,
  DeviceAllPage,
} from './pages'


export const webPages = () => ({
  originPage: new OriginPage(),
  loginPage: new LoginPage(),
  homePage: new HomePage(),
  deviceAllPage: new DeviceAllPage(),
})
