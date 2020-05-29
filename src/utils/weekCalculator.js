const WEEK = 604800000
const DAY = 86400000

export function subtractWeek(date = new Date()) {
  return new Date(date.getTime() - WEEK)
}
export function addWeek(date = new Date()) {
  return new Date(date.getTime() + WEEK)
}

export function getWeekAndYearString(date = new Date()) {
  // Temporary date to prevent mutation
  const tempDate = new Date(date.valueOf())
  tempDate.setHours(0, 0, 0, 0)
  // Set to the nearest Thursday (current date + 4 - current day number)
  tempDate.setDate(tempDate.getDate() + 4 - (tempDate.getDay() || 7))
  // Get first day of year
  const yearStart = new Date(tempDate.getFullYear(), 0, 1)
  // Calculate full weeks to nearest Thursday
  const weekNumber = Math.ceil(((tempDate - yearStart) / DAY + 1) / 7)
  // Return ISO week number and Year
  return `${weekNumber}-${yearStart.getFullYear()}`
}
