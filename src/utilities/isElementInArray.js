export function isElementInArray(array, desiredElement) {
  const elementIndex = array.findIndex((element) => {
    return element === desiredElement;
  });
  return elementIndex !== -1;
}
