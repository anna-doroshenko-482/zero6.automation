// /* eslint-disable no-return-await */
// import { decorateService, methods } from 'utils'
// import { Zero6API } from './zero6.api'
//
// class Equip extends Zero6API {
//   constructor(configuration: Equip) {
//     super(configuration)
//   }
//
//   /**
//    * getSwitchInfo получение информации о коммутаторе по mac, id, ip
//    * @param args mac коммутатора xx:xx:xx:xx:xx:xx, ip коммутатора xxx.xxx.xxx.xxx, id номер в Оборудовании
//    * @returns возвращает массив с данными об установленном коммутаторе
//    */
//   public async getSwitchInfo(args: { ip?: string; id?: number; mac?: string }): Promise<any> {
//     return this.request.get({
//       path: `/equip/getSwitchInfo`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: await this.getToken(),
//       },
//       queries: { ...args },
//     })
//   }
// }
//
// decorateService(Equip)
//
// export { Equip }
