function summarizePerson(
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  middleName?: string,
  hobbies?: string[],
  workInfo?: [string, number]
): [number, string, number, string, string] {
  const fullName = middleName
    ? `${firstName} ${middleName} ${lastName}`
    : `${firstName} ${lastName}`;

  const hobbiesStr = hobbies && hobbies.length > 0 ? hobbies.join(", ") : "-";

  const workInfoStr = workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : "-";

  return [id, fullName, age, hobbiesStr, workInfoStr];
}

console.log(summarizePerson(21, "Joseph", "Angler", 28));
