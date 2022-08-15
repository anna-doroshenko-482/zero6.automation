// /* eslint-disable no-return-await */
// import { decorateService, methods } from 'utils'
// import { Zero6API } from './zero6.api'
//
// class bUserAuth extends Zero6API {
//   constructor(configuration: bUserAuth) {
//     super(configuration)
//   }
//
//   public async authUser(params): Promise<any> {
//     return await this.request.post({
//       path: `/buser/auth/user`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   public async authInet(params): Promise<any> {
//     return await this.request.post({
//       path: `/buser/auth/inet`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   /**
//    * [POST] [authUserSMS] Авторизация абонента по № договора и SMS. В ответ возвращает номер телефона, на который отправился код для подтверждения авторизации.
//    * @param params - body: объект, который содержит номер учётки, номер телефона(optional), ip(optional)
//    * @returns
//    */
//   public async authUserSMS(params): Promise<any> {
//     return await this.request.post({
//       path: `buser/auth/sms`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   /**
//    * [POST] [authUserSMSConfirm] Подтвердить смс код.
//    * @param params - body: объект, который содержит номер учётки, код, номер телефона(optional), ip(optional)
//    * @returns
//    */
//   public async authUserSMSConfirm(params): Promise<any> {
//     return await this.request.post({
//       path: `buser/auth/sms/confirm`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   /**
//    * [POST] [authByApple] Авторизация абонента через Apple.
//    * @param params - body: объект, который содержит access_token и email
//    * @returns
//    */
//   public async authByApple(params): Promise<any> {
//     return await this.request.post({
//       path: `buser/auth/apple`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   /**
//    * [POST] [authByFacebook] Авторизация абонента через Facebook.
//    * @param params - body: объект, который содержит access_token и email
//    * @returns
//    */
//   public async authByFacebook(params): Promise<any> {
//     return await this.request.post({
//       path: `buser/auth/facebook`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   /**
//    * [POST] [authByGoogle] Авторизация абонента через Google.
//    * @param params - body: объект, который содержит access_token и email
//    * @returns
//    */
//   public async authByGoogle(params): Promise<any> {
//     return await this.request.post({
//       path: `buser/auth/google`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   /**
//    * [POST] [validationAuthorization] Валидация данных авторизации.
//    * @param params - body: объект, который содержит id и password
//    * @returns
//    */
//   public async validationAuthorization(params: { id: string; Password: string }): Promise<any> {
//     return await this.request.post({
//       path: `client_auth/user`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
// }
//
// decorateService(bUserAuth)
//
// export { bUserAuth }
