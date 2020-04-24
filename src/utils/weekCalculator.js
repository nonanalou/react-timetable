/**
 * Factory function for creating an object that is capable of generating the
 * week string needed for the gibm timetable API. You can add and subtract
 * a week or reset the Date to the current week. To get week string use
 * the `_getWeekAndYearString()` function. The object uses a closure
 * to keep the date object private to prevent unintended changes.
 * author: hd https://gist.github.com/hdahlheim
 *
 * Usage:
 *
 * ```js
 * const date = createWeekCalculator()
 * date.addWeek()
 * date.getWeekAndYear() // '12-2020'
 * ```
 *
 * @param {String} initialDate
 */
function createWeekCalculator(initialDate) {
  let date = initialDate ? new Date(initialDate) : new Date()
  const WEEK = 604800000
  const DAY = 86400000

  /**
   * Private Function for calculating the Week
   * @param {Date} date
   */
  const _getWeekAndYearString = date => {
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

  return {
    getWeekString() {
      return _getWeekAndYearString(date)
    },
    addWeek() {
      const nextWeek = date.getTime() + WEEK
      date.setTime(nextWeek)
    },
    subtractWeek() {
      const previousWeek = date.getTime() - WEEK
      date.setTime(previousWeek)
    },
    reset() {
      date = new Date()
    },
  }
}
