import { isTextUppercase } from './isTextUppercase';

describe('The isTextUppercase function', () => {
  describe('When the text is lowercase', () => {
    it('should return boolean', () => {
      expect(typeof isTextUppercase('hello')).toBe('boolean');
    });
    it('should return false', () => {
      expect(isTextUppercase('Hello')).toBe(false);
    });
  });
  describe('When the text is uppercase', () => {
    it('should return boolean', () => {
      expect(typeof isTextUppercase('HELLO')).toBe('boolean');
    });
    it('should return true', () => {
      expect(isTextUppercase('HELLO')).toBe(true);
    });
  });
});
