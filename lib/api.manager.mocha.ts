import { configMocha } from 'config'
import {
  AuthByUser,
  BillingUI,
  BUserPayment,
  BillingAPI,
  PaymentGateway,
  Payments,
  AddrMap,
  PaymentsIPTV,
  bUser,
  bUserAuth,
  InternetAccount,
  InternetService,
  iptvAccount,
  BrizTvBillingApi,
  BillingBrizTv,
  AuthMegogo,
  MegogoVideo,
  iptvService,
  CtvAccount,
  CtvService,
  HelperRoutes,
  Street,
  TvFavorite,
  MegogoAPI,
  MegogoPeople,
  TV,
  AuthPassword,
  MegogoFavorite,
  Customer,
  MegogoComments,
  Stream,
  Billing,
  Equip,
  Unions,
  User,
  Megogo,
  MegogoVote,
  Test,
  MegogoSearch,
  PaymentsBilling,
  bUserSocial,
  bArea,
  InternetAuth,
  InternetOrder,
  Team,
  CustomerOrders,
  EquipEx,
  GponOnu,
} from './services'

const apiManagerMocha = {
  helperRoutes: new HelperRoutes(configMocha.billing_api),
  billingAPI: new BillingAPI(configMocha.billing_api),
  megogoAPI: new MegogoAPI(configMocha.megogo_api),
  bUserPayment: new BUserPayment(configMocha.billing_api),
  billingUI: new BillingUI(configMocha.billing_ui),
  authByUser: new AuthByUser(configMocha.user_ip),
  payments: new Payments(configMocha.user_ip),
  addrMap: new AddrMap(configMocha.billing_api),
  paymentsIPTV: new PaymentsIPTV(configMocha.user_ip),
  paymentGateway: new PaymentGateway(configMocha.paymentGateway_api),
  bUser: new bUser(configMocha.billing_api),
  bUserAuth: new bUserAuth(configMocha.billing_api),
  bUserSocial: new bUserSocial(configMocha.billing_api),
  customerOrders: new CustomerOrders(configMocha.billing_api),
  bArea: new bArea(configMocha.billing_api),
  gponOnu: new GponOnu(configMocha.billing_api),
  team: new Team(configMocha.billing_api),
  internetAuth: new InternetAuth(configMocha.billing_api),
  internetAccount: new InternetAccount(configMocha.billing_api),
  internetService: new InternetService(configMocha.billing_api),
  internetOrder: new InternetOrder(configMocha.billing_api),
  iptvAccount: new iptvAccount(configMocha.billing_api),
  brizTvBillingApi: new BrizTvBillingApi(configMocha.ott_billing_api),
  billingBrizTv: new BillingBrizTv(configMocha.ott_billing_api),
  authMegogo: new AuthMegogo(configMocha.megogo_api),
  megogoVideo: new MegogoVideo(configMocha.megogo_api),
  megogoFavorite: new MegogoFavorite(configMocha.megogo_api),
  megogoPeople: new MegogoPeople(configMocha.megogo_api),
  megogoComments: new MegogoComments(configMocha.megogo_api),
  tv: new TV(configMocha.megogo_api),
  tvFavorite: new TvFavorite(configMocha.megogo_api),
  iptvService: new iptvService(configMocha.billing_api),
  ctvAccount: new CtvAccount(configMocha.billing_api),
  ctvService: new CtvService(configMocha.billing_api),
  street: new Street(configMocha.billing_api),
  authNewPass: new AuthPassword(configMocha.megogo_api),
  customer: new Customer(configMocha.megogo_api),
  stream: new Stream(configMocha.megogo_api),
  billing: new Billing(configMocha.megogo_api),
  equip: new Equip(configMocha.billing_api),
  equipEx: new EquipEx(configMocha.billing_api),
  unions: new Unions(configMocha.billing_api),
  user: new User(configMocha.billing_api),
  megogo: new Megogo(configMocha.megogo_api),
  megogoVote: new MegogoVote(configMocha.megogo_api),
  test: new Test(configMocha.megogo_api),
  megogoSearch: new MegogoSearch(configMocha.megogo_api),
  paymentsBilling: new PaymentsBilling(configMocha.billing_api),
}

export { apiManagerMocha }