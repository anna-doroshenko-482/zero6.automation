// /* eslint-disable no-return-await */
// import { decorateService } from 'utils'
// import { Zero6API } from './zero6.api'
//
// class InternetService extends Zero6API {
//   constructor(configuration: InternetService) {
//     super(configuration)
//   }
//
//   /** [GET] getByTypeInetMonthly
//    * https://dev-bil-api.briz.ua/docs/#getbytypeinetmonthly
//    * @param buser_id - id пользователя в системе
//    * @param accountId - id интернет аккаунта
//    * @returns
//    */
//
//   public async getServicesByUserDaily(buserId, accountId): Promise<any> {
//     return await this.request.get({
//       path: `/buser/${buserId}/internets/${accountId}/services/daily`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   /** [GET] getAvailableServicesByUser
//    * https://dev-bil-api.briz.ua/docs/#getavailableservicesbyuser256
//    * @param buser_id - id пользователя в системе
//    * @returns
//    */
//   public async getAvailableServicesByUser(buser_id: number): Promise<any> {
//     return await this.request.get({
//       path: `/buser/${buser_id}/internets/services`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   /** [GET] getByTypeInetMonthly
//    * https://dev-bil-api.briz.ua/docs/#getbytypeinetmonthly
//    * @param buser_id - id пользователя в системе
//    * @param internet_account_id - id интернет аккаунта в системе
//    * @returns
//    */
//   public async getByTypeInetMonthly(buser_id: number, internet_account_id: number): Promise<any> {
//     return await this.request.get({
//       path: `buser/${buser_id}/internets/${internet_account_id}/services/monthly`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'en',
//       },
//     })
//   }
//
//   /** [GET] getServicesByUser
//    * https://dev-bil-api.briz.ua/docs/#getservicesbyuser258
//    * @param buser_id - id пользователя в системе
//    * @param internet_account_id - id интернет аккаунта в системе
//    * @returns
//    */
//   public async getServicesByUser(buser_id: number, internet_account_id: number): Promise<any> {
//     return await this.request.get({
//       path: `buser/${buser_id}/internets/${internet_account_id}/services`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   /** [GET] getServiceEx
//    * https://dev-bil-api.briz.ua/docs/#internetservice-GETinternet-services-ex--internet_service_id-
//    * @param internet_service_id - id доп.сервиса в системе
//    * @returns
//    */
//   public async getServiceEx(internet_service_id: number): Promise<any> {
//     return await this.request.get({
//       path: `/internet/services-ex/${internet_service_id}`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   /** [GET] getAllServiceEx
//    * https://dev-bil-api.briz.ua/docs/#internetservice-GETinternet-services-ex
//    * @returns
//    */
//   public async getAllServiceEx(): Promise<any> {
//     return await this.request.get({
//       path: `/internet/services-ex/`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
//
//   /**
//    * [GET] [getServicesByID] Получение сервиса Интернет по id сервиса.
//    * @param internet_service_id - id сервиса
//    * @returns
//    */
//   public async getServicesByID(internet_service_id: number): Promise<any> {
//     return await this.request.get({
//       path: `/internet/services/${internet_service_id}`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//         'X-Language': 'ua',
//       },
//     })
//   }
// }
//
// decorateService(InternetService)
//
// export { InternetService }
