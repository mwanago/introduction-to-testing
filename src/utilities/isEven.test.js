import { isEven } from './isEven';

describe('The isEven function', () => {
  describe('when provided with even number', () => {
    it('should return true', () => {
      expect(isEven(6)).toBe(true);
    });
  });
  describe('when provided with uneven number', () => {
    it('should return false', () => {
      expect(isEven(5)).toBe(false);
    });
  });
  describe('when provided with zero', () => {
    it('should return false', () => {
      expect(isEven(0)).toBe(true);
    });
  });
  describe('when provided with negative even number', () => {
    it('should return true', () => {
      expect(isEven(-4)).toBe(true);
    });
  });
  describe('when provided with negative uneven number', () => {
    it('should return false', () => {
      expect(isEven(-5)).toBe(false);
    });
  });
});
