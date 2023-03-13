import { getSmallestNumber } from './getSmallestNumber';

describe('The getSmallestNumber function', () => {
  describe('if the smallest number is negative', () => {
    it('should return the smallest negative number', () => {
      expect(getSmallestNumber([2, -5, 10, 1, 4])).toBe(-5);
    });
  });
  describe('if the smallest number is positive', () => {
    it('should return the smallest positive number', () => {
      expect(getSmallestNumber([200, 25, 4, 123, 87])).toBe(4);
    });
  });
  describe('if provided with duplicated smallest number', () => {
    it('should return correct smallest number', () => {
      expect(getSmallestNumber([1, 3, 5, 1, 3])).toBe(1);
    });
  });
  describe('if provided with empty array', () => {
    it('should return undefined', () => {
      expect(getSmallestNumber([])).toBe(null);
    });
  });
});
