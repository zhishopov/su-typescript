function dayOfWeek(day: number) {
  enum DaysOfWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(DaysOfWeek[day] || "error");
}

dayOfWeek(9);
