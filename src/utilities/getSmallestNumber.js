export function getSmallestNumber(arrayOfNumbers) {
  if (arrayOfNumbers.length === 0) {
    return null;
  }
  return Math.min(...arrayOfNumbers);
}
