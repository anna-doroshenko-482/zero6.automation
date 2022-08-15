// export type CustomInitUnionType = {
//   buser_id: string
//   hybrid: string
// }
//
// export type DataErrorUnionType = {
//   hybrid: {
//     vars: {
//       uid: string
//     }
//     accounts: any[]
//     services: any[]
//   }
// }
//
// export type CustomInitUnionNegativeType = {
//   status: string
//   data: boolean | DataErrorUnionType
//   errorCode: number
//   errors: string
// }
//
// export const customUserUnionAbsentResponse: CustomInitUnionNegativeType = {
//   status: 'error',
//   data: false,
//   errorCode: 0,
//   errors: 'Нет такого пользователя',
// }
