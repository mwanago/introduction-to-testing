import { isPalindrome } from './isPalindrome';

describe('The isPalindrome function', () => {
  describe('When provided with correct palindrome', () => {
    describe('When first letter is uppercase', () => {
      it('should return true', () => {
        expect(isPalindrome('Kayak')).toBe(true);
      });
    });
    describe('When string has spaces and uppercase in the middle', () => {
      it('should return true', () => {
        expect(isPalindrome('Was it a cat I saw')).toBe(true);
      });
    });
    describe('When provided with an empty string', () => {
      it('should return true', () => {
        expect(isPalindrome('')).toBe(true);
      });
    });
  });
  describe('When provided with incorrect palindrome', () => {
    it('should return false', () => {
      expect(isPalindrome('Hello!')).toBe(false);
    });
  });
});
