import {
  OriginPage,
  LoginPage,
  HomePage,
} from "./pages";


export const webPages = () => ({
  originPage: new OriginPage(),
  loginPage: new LoginPage(),
  homePage: new HomePage(),
})
