import { getSquaredNumber } from './getSquaredNumber';

describe('The getSquaredNumber function', () => {
  describe('If provided array with only positive numbers', () => {
    it('should return correct squared numbers', () => {
      expect(getSquaredNumber([6, 7, 8, 9, 10])).toEqual([36, 49, 64, 81, 100]);
    });
  });
  describe('If provided array with only negative numbers', () => {
    it('should return correct squared numbers', () => {
      expect(getSquaredNumber([-1, -2, -3, -5])).toEqual([1, 4, 9, 25]);
    });
  });
  describe('If provided array with mixed numbers', () => {
    it('should return correct squared numbers', () => {
      expect(getSquaredNumber([-6, 2, -8, 5])).toEqual([36, 4, 64, 25]);
    });
  });
  describe('If provided with empty array', () => {
    it('should return empty array', () => {
      expect(getSquaredNumber([])).toEqual([]);
    });
  });
});
