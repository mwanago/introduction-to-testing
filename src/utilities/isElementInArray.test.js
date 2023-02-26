import { isElementInArray } from './isElementInArray';

describe('The isElementInArray', () => {
  let array;
  describe('when provided with a valid array of strings', () => {
    beforeEach(() => {
      array = ['orange', 'banana', 'strawberry'];
    });
    describe('and the desired element is not in the array', () => {
      it('should return false', () => {
        const result = isElementInArray(array, 'coconut');
        expect(result).toBe(false);
      });
    });
    describe('and the desired element is in the array', () => {
      it('should return true', () => {
        const result = isElementInArray(array, 'strawberry');
        expect(result).toBe(true);
      });
    });
  });
  describe('when provided with a valid array of numbers', () => {
    beforeEach(() => {
      array = [1, 2, 3, 4];
    });
    describe('and the desired element is not in the array', () => {
      it('should return false', () => {
        expect(isElementInArray(array, 5)).toBe(false);
      });
    });
    describe('and the desired element is in the array', () => {
      it('should return true', () => {
        expect(isElementInArray(array, 3)).toBe(true);
      });
    });
  });
  describe('when provided with an empty array', () => {
    it('should return false', () => {
      expect(isElementInArray([], 3)).toBe(false);
    });
  });
  it('should not modify provided array', () => {
    array = [1, 2, 3, 4];
    const clonedArray = [...array];
    isElementInArray(array, 3);
    expect(array).toEqual(clonedArray);
  });
});
