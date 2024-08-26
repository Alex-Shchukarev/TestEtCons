export function dateTimeFormatter(val: string): string {
  if (!val) { return '' }
  let newDate = new Date(val)
  let HH = newDate.getHours()
  let MM = newDate.getMinutes()
  return `${HH}:${MM}`
}