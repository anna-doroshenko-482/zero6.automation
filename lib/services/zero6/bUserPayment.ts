// /* eslint-disable no-return-await */
// import { decorateService, methods } from 'utils'
// import { Zero6API } from './zero6.api'
//
// class BUserPayment extends Zero6API {
//   constructor(configuration: BUserPayment) {
//     super(configuration)
//   }
//
//   public async getCustomInitInet(params: { buser_id: number; inet: string }): Promise<any> {
//     return await this.request.get({
//       path: `/buser/${params.buser_id}/payments/init/${params.inet}`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ru',
//       },
//     })
//   }
//
//   public async getCustomInitIPTV(params: { buser_id: number; iptv: string }): Promise<any> {
//     return await this.request.get({
//       path: `buser/${params.buser_id}/payments/init/${params.iptv}`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ru',
//       },
//     })
//   }
//
//   public async getCustomUnionInit(params: { buser_id: string; hybrid: string }): Promise<any> {
//     return await this.request.get({
//       path: `buser/${params.buser_id}/payments/init/${params.hybrid}`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ru',
//       },
//     })
//   }
//
//   public async getCustomInitCTV(buser_id: number, ctv: string): Promise<any> {
//     return await this.request.get({
//       path: `buser/${buser_id}/payments/init/${ctv}`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ru',
//       },
//     })
//   }
//
//   public async calculateInternetAccounts(params): Promise<any> {
//     return await this.request.post({
//       path: `buser/${params.UserID}/payments/calculate/internet/${params.Properties[0].accountId}`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         'X-Language': 'ru',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   public async calculateCTVAccounts(params): Promise<any> {
//     return await this.request.post({
//       path: `buser/${params.UserID}/payments/calculate/ctv/${params.Properties[0].accountId}`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ua',
//       },
//     })
//   }
//
//   public async calculateIPTVAccounts(params): Promise<any> {
//     return await this.request.post({
//       path: `buser/${params.UserID}/payments/calculate/iptv/${params.Properties[0].accountId}`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ru',
//       },
//     })
//   }
//
//   public async calculateUnionAccounts(params): Promise<any> {
//     return await this.request.post({
//       path: `buser/${params.UserID}/unions/${params.Properties[0].accountId}/payments/calculate`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ru',
//       },
//     })
//   }
//
//   public async PayInternet(params): Promise<any> {
//     return await this.request.post({
//       path: `buser/${params.UserID}/payments/pay/internet/${params.Properties[0].accountId}`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ru',
//       },
//     })
//   }
//
//   public async PayCTV(params): Promise<any> {
//     return await this.request.post({
//       path: `buser/${params.UserID}/payments/pay/ctv`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ru',
//       },
//     })
//   }
//
//   public async PayIPTV(params): Promise<any> {
//     return await this.request.post({
//       path: `buser/${params.UserID}/payments/pay/iptv/${params.Properties[0].accountId}`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ru',
//       },
//     })
//   }
//
//   public async PayUnion(params): Promise<any> {
//     return await this.request.post({
//       path: `buser/${params.UserID}/unions/${params.Properties[0].accountId}/payments/pay`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ru',
//       },
//     })
//   }
//
//   public async initAll(buser_id: any): Promise<any> {
//     return await this.request.get({
//       path: `/buser/${buser_id}/payments/init/all`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ru',
//       },
//     })
//   }
//
//   public async calculateAllAccounts(params): Promise<any> {
//     return await this.request.post({
//       path: `buser/${params.UserID}/payments/calculate/all`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ru',
//       },
//     })
//   }
//
//   public async payAllAccounts(params): Promise<any> {
//     return await this.request.post({
//       path: `buser/${params.UserID}/payments/pay/all`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ru',
//       },
//     })
//   }
//
//   /** [GET] historyForCustomer
//    * https://dev-bil-api.briz.ua/docs/#historypay
//    * @param buser_id - id учётной записи
//    * @param Type - Тип оплаты. Например: pay/addmoney/waiting
//    * @param Services - Услуги. Например: inet/iptv/ctv/dtv/union
//    * @param AccountId - ID аккаунта
//    * @param Period - Период оплат. Например: 2019
//    * @param Page - Страница
//    * @returns
//    */
//   public async historyPay(
//     buser_id: any,
//     args: { Type?: string; Services?: string; AccountId?: string; Period?: string; Page?: string },
//   ): Promise<any> {
//     return await this.request.get({
//       path: `/buser/${buser_id}/payments/customer/history`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ua',
//       },
//       queries: { ...args },
//     })
//   }
//   /**
//    * [GET] canPay
//    * @param buser_id - id пользователя в системе
//    * @returns
//    */
//   public async canPay(buser_id: number): Promise<any> {
//     return await this.request.get({
//       path: `/buser/${buser_id}/payments/canPay`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ru',
//       },
//     })
//   }
//
//   /**
//    * [GET] needPay
//    * https://dev-bil-api.briz.ua/docs/#buserpayments-GETbuser--buser_id--payments-needPay
//    * @param buser_id - id пользователя в системе
//    * @returns
//    */
//   public async needPay(buser_id: number): Promise<any> {
//     return await this.request.get({
//       path: `/buser/${buser_id}/payments/needPay`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ru',
//       },
//     })
//   }
// }
//
// decorateService(BUserPayment)
//
// export { BUserPayment }
