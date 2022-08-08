import {
  OriginPage,
  LoginPage,
  Header,
  DeviceAllPage,
} from './pages'


export const webPages = () => ({
  originPage: new OriginPage(),
  loginPage: new LoginPage(),
  header: new Header(),
  deviceAllPage: new DeviceAllPage(),
})
