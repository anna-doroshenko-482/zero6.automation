// /* eslint-disable no-return-await */
// import { decorateService } from 'utils'
// import { AuthByUser } from '../userApi'
//
// class Payments extends AuthByUser {
//   constructor(configuration: Payments) {
//     super(configuration)
//   }
//
//   public async getPaymentSettings(account_id: string): Promise<any> {
//     const { body } = await this.execAuth()
//     return await this.request.get({
//       path: `api/user/internet/${account_id}/init`,
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//         Authorization: `Bearer ${body.access_token}`,
//       },
//     })
//   }
//
//   public async internetCalculate(account_id: string): Promise<any> {
//     const { body } = await this.execAuth()
//     return await this.request.post({
//       path: `api/user/internet/${account_id}/calculate`,
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//         Authorization: `Bearer ${body.access_token}`,
//       },
//     })
//   }
//
//   public async internetPay(account_id: string): Promise<any> {
//     const { body } = await this.execAuth()
//     return await this.request.post({
//       path: `api/user/internet/${account_id}/pay`,
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//         Authorization: `Bearer ${body.access_token}`,
//       },
//     })
//   }
// }
//
// decorateService(Payments)
//
// export { Payments }
