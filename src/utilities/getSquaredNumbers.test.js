import { getSquaredNumbers } from './getSquaredNumbers';

describe('The getSquaredNumbers function', () => {
  describe('if provided array with only positive numbers', () => {
    it('should return correct squared numbers', () => {
      expect(getSquaredNumbers([6, 7, 8, 9, 10])).toEqual([
        36, 49, 64, 81, 100,
      ]);
    });
  });
  describe('if provided array with only negative numbers', () => {
    it('should return correct squared numbers', () => {
      expect(getSquaredNumbers([-1, -2, -3, -5])).toEqual([1, 4, 9, 25]);
    });
  });
  describe('if provided array with mixed numbers', () => {
    it('should return correct squared numbers', () => {
      expect(getSquaredNumbers([-6, 2, -8, 5])).toEqual([36, 4, 64, 25]);
    });
  });
  describe('if provided with empty array', () => {
    it('should return empty array', () => {
      expect(getSquaredNumbers([])).toEqual([]);
    });
  });
});
