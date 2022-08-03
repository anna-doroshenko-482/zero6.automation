/* eslint-disable space-before-function-paren */
import moment from 'moment'

// Define back-end time, for handling time-zones difference
const now = () => moment().add(0, 'hours')

// Define whether or not fiscal year is equal to calendar year
const isFiscalEqualToCalendar = now().month() < 5 // by index. Less than May 31.

// Define period for each quarter
const firstQuarter = [5, 6, 7] // by index. Real months are [6, 7, 8]
const secondQuarter = [8, 9, 10] // by index. Real months are [9, 10, 11]
const thirdQuarter = [11, 0, 1] // by index. Real months are [12, 1, 2]
const forthQuarter = [2, 3, 4] // by index. Real months are [3, 4, 5]
const quarters = [firstQuarter, secondQuarter, thirdQuarter, forthQuarter]

const currentFiscalQuarterStartMonth = function () {
  const currentQuarter = quarters.find((quarter) => quarter.includes(now().month()))
  if (now().month() === 0 || now().month() === 1) {
    return now().month(currentQuarter[0]).subtract(1, 'year')
  } else {
    return now().month(currentQuarter[0])
  }
}
const currentFiscalQuarterEndMonth = function () {
  const currentQuarter = quarters.find((quarter) => quarter.includes(now().month()))
  if (now().month() === 11) {
    return now().month(currentQuarter[2]).add(1, 'year')
  } else {
    return now().month(currentQuarter[2])
  }
}

const dates = {
  fiscalYear: {
    currentFiscalYearStart: isFiscalEqualToCalendar
      ? now().subtract(1, 'year').month('June').startOf('month').format('YYYY-MM-DDTHH:mm:ssZ')
      : now().month('June').startOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
    currentFiscalYearEnd: isFiscalEqualToCalendar
      ? now().month('May').endOf('month').format('YYYY-MM-DDTHH:mm:ssZ')
      : now().add(1, 'year').month('May').endOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
    previousFiscalYearStart: isFiscalEqualToCalendar
      ? now().subtract(2, 'year').month('June').startOf('month').format('YYYY-MM-DDTHH:mm:ssZ')
      : now().subtract(1, 'year').month('June').startOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
    previousFiscalYearEnd: isFiscalEqualToCalendar
      ? now().subtract(1, 'year').month('May').endOf('month').format('YYYY-MM-DDTHH:mm:ssZ')
      : now().month('May').endOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
    twoFiscalYearsAgoStart: isFiscalEqualToCalendar
      ? now().subtract(3, 'year').month('June').startOf('month').format('YYYY-MM-DDTHH:mm:ssZ')
      : now().subtract(2, 'year').month('June').startOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
    twoFiscalYearsAgoEnd: isFiscalEqualToCalendar
      ? now().subtract(2, 'year').month('May').endOf('month').format('YYYY-MM-DDTHH:mm:ssZ')
      : now().subtract(1, 'year').month('May').endOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
    nextFiscalYearStart: isFiscalEqualToCalendar
      ? now().month('June').startOf('month').format('MM.DD.YYYY')
      : now().add(1, 'year').month('June').startOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
    nextFiscalYearEnd: isFiscalEqualToCalendar
      ? now().add(1, 'year').month('May').endOf('month').format('YYYY-MM-DDTHH:mm:ssZ')
      : now().add(2, 'year').month('May').endOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
  },
  fiscalQuarter: {
    currentFiscalQuarterStart: currentFiscalQuarterStartMonth().startOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
    currentFiscalQuarterEnd: currentFiscalQuarterEndMonth().endOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
    previousFiscalQuarterStart: currentFiscalQuarterStartMonth()
      .subtract(3, 'month')
      .startOf('month')
      .format('YYYY-MM-DDTHH:mm:ssZ'),
    previuosFiscalQuarterEnd: currentFiscalQuarterEndMonth()
      .subtract(3, 'month')
      .endOf('month')
      .format('YYYY-MM-DDTHH:mm:ssZ'),
    nextFiscalQuarterStart: currentFiscalQuarterStartMonth()
      .add(3, 'month')
      .startOf('month')
      .format('YYYY-MM-DDTHH:mm:ssZ'),
    nextFiscalQuarterEnd: currentFiscalQuarterEndMonth().add(3, 'month').endOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
  },
  calendarYear: {
    currentCalendarYearStart: now().month('January').startOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
    currentCalendarYearEnd: now().month('December').endOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
    previousCalendarYearStart: now()
      .subtract(1, 'year')
      .month('January')
      .startOf('month')
      .format('YYYY-MM-DDTHH:mm:ssZ'),
    previousCalendarYearEnd: now().subtract(1, 'year').month('December').endOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
    twoCalendarYearsAgoStart: now()
      .subtract(2, 'year')
      .month('January')
      .startOf('month')
      .format('YYYY-MM-DDTHH:mm:ssZ'),
    twoCalendarYearsAgoEnd: now().subtract(2, 'year').month('December').endOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
    nextCalendarYearStart: now().add(1, 'year').month('January').startOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
    nextCalendarYearEnd: now().add(1, 'year').month('December').endOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
  },
  calendarQuarter: {
    currentCalendarQuarterStart: now().startOf('quarter').format('YYYY-MM-DDTHH:mm:ssZ'),
    currentCalendarQuarterEnd: now().endOf('quarter').format('YYYY-MM-DDTHH:mm:ssZ'),
    previousCalendarQuarterStart: now().subtract(1, 'quarter').startOf('quarter').format('YYYY-MM-DDTHH:mm:ssZ'),
    previousCalendarQuarterEnd: now().subtract(1, 'quarter').endOf('quarter').format('YYYY-MM-DDTHH:mm:ssZ'),
    nextCalendarQuarterStart: now().local().add(1, 'quarter').startOf('quarter').format('YYYY-MM-DDTHH:mm:ssZ'),
    nextCalendarQuarterEnd: now().local().add(1, 'quarter').endOf('quarter').format('YYYY-MM-DDTHH:mm:ssZ'),
  },
  month: {
    thisMonthStart: now().startOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
    thisMonthEnd: now().endOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
    lastMonthStart: now().subtract(1, 'month').startOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
    lastMonthEnd: now().subtract(1, 'month').endOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
    nextMonthStart: now().add(1, 'month').startOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
    nextMonthEnd: now().add(1, 'month').endOf('month').format('YYYY-MM-DDTHH:mm:ssZ'),
  },
  week: {
    thisWeekStart: now().startOf('week').format('YYYY-MM-DDTHH:mm:ssZ'),
    thisWeekEnd: now().endOf('week').format('YYYY-MM-DDTHH:mm:ssZ'),
    lastWeekStart: now().subtract(1, 'week').startOf('week').format('YYYY-MM-DDTHH:mm:ssZ'),
    lastWeekEnd: now().subtract(1, 'week').endOf('week').format('YYYY-MM-DDTHH:mm:ssZ'),
    nextWeekStart: now().add(1, 'week').startOf('week').format('YYYY-MM-DDTHH:mm:ssZ'),
    nextWeekEnd: now().add(1, 'week').endOf('week').format('YYYY-MM-DDTHH:mm:ssZ'),
  },
  day: {
    today: now().format('YYYY-MM-DDTHH:mm:ss'),
    todayPlus3Minutes: now().add(3, 'minutes').format('YYYY-MM-DDTHH:mm:ss'),
    todayPlus10Minutes: now().add(10, 'minutes').format('YYYY-MM-DDTHH:mm:ss'),
    todayMinus1: now().subtract(1, 'minutes').format('YYYY-MM-DDTHH:mm:ss'),
    yesterday: now().subtract(1, 'day').format('YYYY-MM-DDTHH:mm:ss'),
    todayDate: now().format('YYYY-MM-DD'),
    tomorrow: now().add(1, 'days').format('YYYY-MM-DDTHH:mm:ss'),
    tomorrowDate: now().add(1, 'days').format('YYYY-MM-DD'),
    lastSevenDaysStart: now().subtract(6, 'day').format('YYYY-MM-DDTHH:mm:ssZ'),
    lastThirtyDaysStart: now().subtract(29, 'day').format('YYYY-MM-DDTHH:mm:ssZ'),
    lastSixtyDaysStart: now().subtract(59, 'day').format('YYYY-MM-DDTHH:mm:ssZ'),
    lastNintyDaysStart: now().subtract(89, 'day').format('YYYY-MM-DDTHH:mm:ssZ'),
    nextSevenDaysEnd: now().add(6, 'days').format('YYYY-MM-DDTHH:mm:ssZ'),
    nextThirtyDaysEnd: now().add(29, 'days').format('YYYY-MM-DDTHH:mm:ssZ'),
    nextSixtyDaysEnd: now().add(59, 'days').format('YYYY-MM-DDTHH:mm:ssZ'),
    nextNinetyDaysEnd: now().add(89, 'days').format('YYYY-MM-DDTHH:mm:ss'),
  },
  custom: {
    referanceId: now().format('YYMMDDHHmmss'),
    shortDate: now().format('YYMMDD'),
  },
}

export { dates }
