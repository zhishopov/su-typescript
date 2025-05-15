function reversedDayOfWeek(dayOfWeek: string): void {
  enum DaysOfWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(DaysOfWeek[dayOfWeek as keyof typeof DaysOfWeek] || "error");
}

reversedDayOfWeek("Tuesday");
