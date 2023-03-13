import { isPalindrome } from './isPalindrome';

describe('The isPalindrome function', () => {
  describe('when provided with correct palindrome', () => {
    describe('when first letter is uppercase', () => {
      it('should return true', () => {
        expect(isPalindrome('Kayak')).toBe(true);
      });
    });
    describe('when string has spaces and uppercase in the middle', () => {
      it('should return true', () => {
        expect(isPalindrome('Was it a cat I saw')).toBe(true);
      });
    });
    describe('when provided with an empty string', () => {
      it('should return true', () => {
        expect(isPalindrome('')).toBe(true);
      });
    });
  });
  describe('when provided with incorrect palindrome', () => {
    it('should return false', () => {
      expect(isPalindrome('Hello!')).toBe(false);
    });
  });
});
