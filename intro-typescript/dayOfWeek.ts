enum DaysOfWeek {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function dayOfWeek(day: number) {
  if (day === DaysOfWeek.Monday) {
    console.log("Monday");
  } else if (day === DaysOfWeek.Tuesday) {
    console.log("Tuesday");
  } else if (day === DaysOfWeek.Wednesday) {
    console.log("Wednesday");
  } else if (day === DaysOfWeek.Thursday) {
    console.log("Thursday");
  } else if (day === DaysOfWeek.Friday) {
    console.log("Friday");
  } else if (day === DaysOfWeek.Saturday) {
    console.log("Saturday");
  } else if (day === DaysOfWeek.Sunday) {
    console.log("Sunday");
  } else {
    console.log("Error");
  }
}

dayOfWeek(7);
