/* eslint-disable no-return-await */
import { decorateService, methods } from 'utils'
import { BillingAPI } from './billing.api'

class bUser extends BillingAPI {
  constructor(configuration: bUser) {
    super(configuration)
  }

  public async bUserAuth(params): Promise<any> {
    return await this.request.post({
      path: `/api/authenticate`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  public async bUserCreate(params): Promise<any> {
    return await this.request.post({
      path: `/buser`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /**
   * [bUser] [bUserUpdate] обновление учётной записи пользователя
   * @param params - body: объект, который содержит параметры пользователя
   * @param buser_id - id пользователя в системе
   * @returns
   */
  public async bUserUpdate(buser_id: number, params): Promise<any> {
    return await this.request.put({
      path: `/buser/${buser_id}`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  public async getCreateCTVAccounts(params, buser_id): Promise<any> {
    return await this.request.post({
      path: `/buser/${buser_id}/ctvs`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /**
   * [GET] [getUnionAccountFromUser] Получение аккаунтов Union от авторизированного пользователя.
   * @param buser_id - id пользователя в системе
   * @returns
   */
  public async getUnionAccountFromUser(buser_id: number): Promise<any> {
    return await this.request.get({
      path: `buser/${buser_id}/unions`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  public async createUnionAccounts(params, buser_id): Promise<any> {
    return await this.request.post({
      path: `/buser/${buser_id}/unions`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
        'X-Language': 'ru',
      },
    })
  }

  /**
   * [bUser] [savePhoneNumberForSMS] добавлять телефон пользователю для смс информирования и не отправлять реальный смс для подтверждения телефона
   * @param params - body: объект, который содержит номер телефона
   * @param buser_id - id пользователя в системе
   * @returns
   */
  public async savePhoneNumberForSMS(params, buser_id): Promise<any> {
    return await this.request.post({
      path: `/buser/${buser_id}/sms/save`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
        'X-Language': 'ru',
      },
    })
  }

  /**
   * [bUser] [deletePhoneNumberForSMS] удалить телефон для смс информирования
   * @param params - body: объект, который содержит номер телефона
   * @param buser_id - id пользователя в системе
   * @returns
   */
  public async deletePhoneNumberForSMS(buser_id: number, params?): Promise<any> {
    return await this.request.del({
      path: `buser/${buser_id}/sms/delete`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /**
   * [bUser] [getLatest] Получение списка последних зарегестрированных пользователей
   * @param count - string Значения от 10 до 100. Количество пользователей для возврата
   * @returns - object со списком пользователей и данным по ним. Первый пользователь в объекте - это последний в базе
   */
  public async getLatest(count: number): Promise<any> {
    return await this.request.get({
      path: `buser/latest/${count}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
        'X-Language': 'ru',
      },
    })
  }

  public async updateCTVAccount(params, buser_id: number, account_id: number): Promise<any> {
    return await this.request.put({
      path: `/buser/${buser_id}/ctvs/${account_id}`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /** [PUT] setLocale
   * https://dev-bil-api.briz.ua/docs/#setlocale
   * @param buser_id - id пользователя в системе
   * @param params - body: объект, который содержит параметр lang для установки языка
   * @returns
   */
  public async setLocale(buser_id: number, params?: { lang: string }): Promise<any> {
    return await this.request.put({
      path: `/buser/${buser_id}/locale`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }
  public async getCTVAccountByBUserId(buser_id: number, ctv_account_id: number): Promise<any> {
    return await this.request.get({
      path: `buser/${buser_id}/ctvs/${ctv_account_id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
        'X-Language': 'ua',
      },
    })
  }

  public async getUserAccounts(buser_id: number): Promise<any> {
    return await this.request.get({
      path: `buser/${buser_id}/accounts`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
        'X-Language': 'ua',
      },
    })
  }
  /**
   * [getBUser] получение сводной информации об абоненте
   * @param buser_id номер абонента
   * @returns массив информации - адрес, фио и т.д.
   */

  public async getBUser(buser_id: number): Promise<any> {
    return await this.request.get({
      path: `/buser/${buser_id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
        'X-Language': 'ru',
      },
    })
  }

  /**
   * [getServicesByUser] Получение сервисов по аккаунту.
   * @param buser_id номер абонента
   * @param union_account_id номер аккаунта Юнион
   * @returns массив информации - адрес, фио и т.д.
   */

  public async getServicesByUser(buser_id: number, union_account_id: number): Promise<any> {
    return await this.request.get({
      path: `/buser/${buser_id}/unions/${union_account_id}/services`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /**
   * [getUnionAccountsFromUserByUnionID] получение сводной информации об абоненте
   * @param buser_id номер абонента
   * @param union_account_id номер юнион аккаунта
   * @returns массив с информацией про юнион аккаунт
   */
  public async getUnionAccountsFromUserByUnionID(buser_id: number, union_account_id: number): Promise<any> {
    return await this.request.get({
      path: `/buser/${buser_id}/unions/${union_account_id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
        'X-Language': 'ua',
      },
    })
  }

  /** [GET] getAvailableServicesByUser
   * https://dev-bil-api.briz.ua/docs/#buser-GETbuser--buser_id--unions-services
   * @param buser_id - id пользователя в системе
   * @returns
   */
  public async getAvailableServicesByUser(buser_id: number): Promise<any> {
    return await this.request.get({
      path: `/buser/${buser_id}/unions/services`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /** [PUT] updatePassword
   * https://dev-bil-api.briz.ua/docs/#buser-PUTbuser--buser_id--password-update
   * @param buser_id - id пользователя в системе
   * @param params - тело запроса, которое содердит параметр Password
   * @returns
   */
  public async updatePassword(buser_id: number, params: { Password: string }): Promise<any> {
    return await this.request.put({
      path: `/buser/${buser_id}/password/update`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /** [POST] setEmail
   * https://dev-bil-api.briz.ua/docs/#buser-POSTbuser--buser_id--email-add
   * @param buser_id - id пользователя в системе
   * @param params - тело запроса
   * @returns
   */
  public async setEmail(
    buser_id: number,
    params: { Email: string; Callback: string; IsFlatParams: number },
  ): Promise<any> {
    return await this.request.post({
      path: `/buser/${buser_id}/email/add`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }
}

decorateService(bUser)

export { bUser }
