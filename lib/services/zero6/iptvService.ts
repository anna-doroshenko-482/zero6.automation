// /* eslint-disable no-return-await */
// import { decorateService } from 'utils'
// import { Zero6API } from './zero6.api'
//
// class iptvService extends Zero6API {
//   constructor(configuration: iptvService) {
//     super(configuration)
//   }
//
//   public async getIPTVServiceById(iptv_account_id): Promise<any> {
//     return await this.request.get({
//       path: `/iptv/${iptv_account_id}/details`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   public async isMacExist(args: { mac }): Promise<any> {
//     return await this.request.get({
//       path: `/biptvaccount/mac`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//       queries: { ...args },
//     })
//   }
//
//   /**
//    * [GET] [getServices] Получение сервиса IPTV по id сервиса.
//    * @param iptv_service_id - id сервиса
//    * @returns
//    */
//   public async getServices(iptv_service_id: number): Promise<any> {
//     return await this.request.get({
//       path: `/iptv/services/${iptv_service_id}`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ua',
//       },
//     })
//   }
//
//   /**
//    * [GET] [getServicesEx] Получение дополнительных сервисов IPTV.
//    * https://dev-bil-api.briz.ua/docs/#iptvservice-GETiptv-services-ex
//    * @param iptv_service_id - id сервиса
//    * @returns
//    */
//   public async getServicesExByIPTVID(iptv_service_id: number): Promise<any> {
//     return await this.request.get({
//       path: `/iptv/services-ex/${iptv_service_id}`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   /**
//    * [GET] [getServicesExByIPTVID] Получение дополнительных сервисов IPTV по идентификатору.
//    * https://dev-bil-api.briz.ua/docs/#iptvservice-GETiptv-services-ex--iptv_service_id-
//    * @returns
//    */
//   public async getServicesEx(): Promise<any> {
//     return await this.request.get({
//       path: `/iptv/services-ex`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   /**
//    * [POST] [createDevice] Создание IPTV устройства по идентификатору.
//    * https://dev-bil-api.briz.ua/docs/#iptvservice-POSTiptv--iptv_account_id--device
//    * @returns
//    */
//   public async createDevice(iptv_account_id: number, params): Promise<any> {
//     return await this.request.post({
//       path: `/iptv/${iptv_account_id}/device`,
//       body: params,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
// }
//
// decorateService(iptvService)
//
// export { iptvService }
