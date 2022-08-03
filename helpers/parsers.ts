export const getAmountFromRate = (row: string) => {
  const regex = /\d{2,}.*\((\d{1,})\W{4,}\)/
  const amount = row.match(regex)[0]
  return Number(amount)
}
