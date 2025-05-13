function evenSum(numOne: number, numTwo: number, numThree: number): boolean {
  const sum: number = numOne + numTwo + numThree;

  if (sum % 2 === 0) {
    return true;
  }

  return false;
}

console.log(evenSum(2, 2, 3));
