/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayOfTheWeek {
  MONDAY = "monday",
  TUESDAY = "tuesday",
  WEDNESDAY = "wednesday",
  THURSDAY = "thursday",
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday",
}

function isWeekend(day: DayOfTheWeek): boolean {
  if (DayOfTheWeek.SATURDAY || DayOfTheWeek.SUNDAY) {
    return true;
  }
  return false;
}
