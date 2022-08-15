// /* eslint-disable no-return-await */
// import { decorateService } from 'utils'
// import { Zero6API } from './zero6.api'
//
// class Unions extends Zero6API {
//   constructor(configuration: Unions) {
//     super(configuration)
//   }
//
//   /**
//    * [GET] [getServicesUnionByID] Получение сервиса Union по id сервиса.
//    * @param union_service_id - id сервиса
//    * @returns
//    */
//   public async getServicesUnionByID(union_service_id: number): Promise<any> {
//     return await this.request.get({
//       path: `/unions/services/${union_service_id}`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ua',
//       },
//     })
//   }
//
//   /**
//    * [GET] [getUnionAccountsByID] Получение Union аккаунта по id аккаунта.
//    * @param union_account_id - id юнион аккаунта
//    * @returns
//    */
//   public async getUnionAccountsByID(union_account_id: number): Promise<any> {
//     return await this.request.get({
//       path: `/union/${union_account_id}`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ua',
//       },
//     })
//   }
//
//   /**
//    * [GET] [getUnionServicesTypes] Получение типов Union сервиса.
//    * @returns
//    */
//   public async getUnionServicesTypes(): Promise<any> {
//     return await this.request.get({
//       path: `/unions/services/types`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ua',
//       },
//     })
//   }
//
//   /**
//    * [GET] [getAllServices] Получение сервисов по полю Hidden.
//    * @returns
//    */
//   public async getAllServices(): Promise<any> {
//     return await this.request.get({
//       path: `/unions/services`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ua',
//       },
//     })
//   }
//
//   /**
//    * [GET] [getUnionAccountsWithPagination] Получение аккаунтов Union с пагинацией.
//    * Получение аккаунтов Union с пагинацией.
//    * @returns
//    */
//   public async getUnionAccountsWithPagination(args?: { count?; simple? }): Promise<any> {
//     return await this.request.get({
//       path: `/union`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//       queries: { ...args },
//     })
//   }
// }
//
// decorateService(Unions)
//
// export { Unions }
