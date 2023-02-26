import { getNegativeNumbers } from './getNegativeNumbers';
describe('The getNegativeNumbers function', () => {
  describe('When provided with positive and negative numbers', () => {
    it('should return only negative numbers array', () => {
      expect(getNegativeNumbers([1, -5, -3, 12, -152])).toEqual([-5, -3, -152]);
    });
  });
  describe('When provided with only negative numbers', () => {
    it('should return the same array', () => {
      const arrayToTest = [-5, -3, -152];
      expect(getNegativeNumbers(arrayToTest)).toEqual(arrayToTest);
    });
  });
  describe('When provided with only positive numbers', () => {
    it('should return empty array', () => {
      expect(getNegativeNumbers([6, 3, 254])).toEqual([]);
    });
  });
  describe('If provided with empty array', () => {
    it('should return empty array', () => {
      expect(getNegativeNumbers([])).toEqual([]);
    });
  });
});
