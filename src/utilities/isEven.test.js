import { isEven } from './isEven';

describe('The isEven function', () => {
  describe('when provided with an even number', () => {
    it('should return true', () => {
      expect(isEven(6)).toBe(true);
    });
  });
  describe('when provided with an odd number', () => {
    it('should return false', () => {
      expect(isEven(5)).toBe(false);
    });
  });
  describe('when provided with the zero', () => {
    it('should return false', () => {
      expect(isEven(0)).toBe(true);
    });
  });
  describe('when provided with a negative even number', () => {
    it('should return true', () => {
      expect(isEven(-4)).toBe(true);
    });
  });
  describe('when provided with a negative odd number', () => {
    it('should return false', () => {
      expect(isEven(-5)).toBe(false);
    });
  });
});
