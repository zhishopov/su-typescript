function convertArrays(input: string[]): [string, number] {
  const result = input.join("");

  return [result, result.length];
}

console.log(convertArrays(["How", "are", "you?"]));
console.log(
  convertArrays(["Today", " is", " a ", "nice", " ", "day for ", "TypeScript"])
);
