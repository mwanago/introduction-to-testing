export function getSmallestNumber(arrayOfNumbers) {
  if (arrayOfNumbers.length === 0) {
    return undefined;
  }
  return Math.min(...arrayOfNumbers);
}
