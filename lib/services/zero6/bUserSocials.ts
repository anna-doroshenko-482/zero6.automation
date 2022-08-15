// /* eslint-disable no-return-await */
// import { decorateService, methods } from 'utils'
// import { Zero6API } from './zero6.api'
//
// class bUserSocial extends Zero6API {
//   constructor(configuration: bUserSocial) {
//     super(configuration)
//   }
//
//   /**
//    * [POST] [socialAppleConnect] Подключение Apple аккаунта.
//    * @param buser_id - id пользователя в системе
//    * @param params - body содержащий параметры для привязки соц. сети
//    * @returns
//    */
//   public async socialAppleConnect(
//     buser_id: number,
//     params: { access_token: string; email?: string; surname?: string; name?: string; picture?: string },
//   ): Promise<any> {
//     return await this.request.post({
//       path: `/buser/${buser_id}/socials/apple`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   /**
//    * [POST] [socialFacebookConnect] Подключение Facebook аккаунта.
//    * @param buser_id - id пользователя в системе
//    * @param params - body содержащий параметры для привязки соц. сети
//    * @returns
//    */
//   public async socialFacebookConnect(
//     buser_id: number,
//     params: { access_token: string; email?: string; surname?: string; name?: string; picture?: string },
//   ): Promise<any> {
//     return await this.request.post({
//       path: `/buser/${buser_id}/socials/facebook`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   /**
//    * [POST] [socialGoogleConnect] Подключение Facebook аккаунта.
//    * @param buser_id - id пользователя в системе
//    * @param params - body содержащий параметры для привязки соц. сети
//    * @returns
//    */
//   public async socialGoogleConnect(
//     buser_id: number,
//     params: { access_token: string; email?: string; surname?: string; name?: string; picture?: string },
//   ): Promise<any> {
//     return await this.request.post({
//       path: `/buser/${buser_id}/socials/google`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   /**
//    * [DELETE] [socialGoogleDisable] Отвязка Google аккаунта абонента.
//    * @param buser_id - id пользователя в системе
//    * @returns
//    */
//   public async socialGoogleDisable(buser_id: number): Promise<any> {
//     return await this.request.del({
//       path: `/buser/${buser_id}/socials/google`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   /**
//    * [DELETE] [socialFacebookDisable] Отвязка Facebook аккаунта абонента.
//    * @param buser_id - id пользователя в системе
//    * @returns
//    */
//   public async socialFacebookDisable(buser_id: number): Promise<any> {
//     return await this.request.del({
//       path: `/buser/${buser_id}/socials/facebook`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   /**
//    * [DELETE] [socialAppleDisable] Отвязка Apple  аккаунта абонента.
//    * @param buser_id - id пользователя в системе
//    * @returns
//    */
//   public async socialAppleDisable(buser_id: number): Promise<any> {
//     return await this.request.del({
//       path: `/buser/${buser_id}/socials/apple`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
// }
//
// decorateService(bUserSocial)
//
// export { bUserSocial }
