// /* eslint-disable no-return-await */
// import { decorateService } from 'utils'
// import { Zero6API } from './zero6.api'
//
// class CtvService extends Zero6API {
//   constructor(configuration: CtvService) {
//     super(configuration)
//   }
//
//   /**
//    * [GET] [getByTypeCTV] Получение сервисов по аккаунту.
//    * @param buser_id - id пользователя в системе
//    * @param ctv_account_id - id КТВ аккаунта в системе
//    * @returns
//    */
//   public async getByTypeCTV(buser_id: number, ctv_account_id: number): Promise<any> {
//     return await this.request.get({
//       path: `/buser/${buser_id}/ctvs/${ctv_account_id}/services`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   /**
//    * [GET] [getServiceCtvByID] Получение сервиса КТВ по id сервиса.
//    * @param ctv_service_id - id сервиса
//    * @returns
//    */
//   public async getServiceCtvByID(ctv_service_id: number): Promise<any> {
//     return await this.request.get({
//       path: `/ctv/services/${ctv_service_id}`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ua',
//       },
//     })
//   }
//
//   /**
//    * [GET] [getServiceCtvExById] Получение дополнительного сервиса КТВ по id сервиса.
//    * @param ctv_service_ex_id - id дополнительного сервиса
//    * @returns
//    */
//   public async getServiceCtvExById(ctv_service_ex_id: number): Promise<any> {
//     return await this.request.get({
//       path: `/ctv/services-ex/${ctv_service_ex_id}`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ua',
//       },
//     })
//   }
//
//   /**
//    * [GET] [getAllCtvServicesEx] Получение всех дополнительных сервисов CTV.
//    * https://dev-bil-api.briz.ua/docs/#ctvservice-GETctv-services-ex
//    * @returns
//    */
//   public async getAllCtvServicesEx(): Promise<any> {
//     return await this.request.get({
//       path: `/ctv/services-ex`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ua',
//       },
//     })
//   }
// }
//
// decorateService(CtvService)
//
// export { CtvService }
