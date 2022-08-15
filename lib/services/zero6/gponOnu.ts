// /* eslint-disable no-return-await */
// import { decorateService, methods } from 'utils'
// import { Zero6API } from './zero6.api'
//
// class GponOnu extends Zero6API {
//   constructor(configuration: GponOnu) {
//     super(configuration)
//   }
//
//   /**
//    * getGponList Получение списка GPON станций
//    * ApiDoc: https://dev-bil-api.briz.ua/docs/#gpononu-GETgpon
//    */
//   public async getGponList(): Promise<any> {
//     return this.request.get({
//       path: `/gpon`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//     })
//   }
// }
//
// decorateService(GponOnu)
//
// export { GponOnu }
