function formatPerson(input: [string, number]): string {
  const [name, age] = input;

  return `Hello, my name is ${name} and my age is ${age}`;
}

console.log(formatPerson(["Pesho", 20]));
