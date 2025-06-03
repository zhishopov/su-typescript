function multiply(
  valueOne?: string | number,
  valueTwo?: string | number,
  valueThree?: string | number
): number {
  const numOne = valueOne == undefined ? 1 : Number(valueOne);
  const numTwo = valueTwo == undefined ? 1 : Number(valueTwo);
  const numThree = valueThree == undefined ? 1 : Number(valueThree);

  return numOne * numTwo * numThree;
}

console.log(multiply("2", "2"));
