import { isElementInArray } from './isElementInArray';

describe('The isElementInArray', () => {
  describe('when provided with a valid array of strings', () => {
    describe('and the desired element is in the array', () => {
      it('should return true', () => {
        const array = ['orange', 'banana', 'strawberry'];
        const result = isElementInArray(array, 'strawberry');
        expect(result).toBe(true);
      });
    });
    describe('and the desired element is not in the array', () => {
      it('should return true', () => {
        const array = ['orange', 'banana', 'strawberry'];
        const result = isElementInArray(array, 'coconut');
        expect(result).toBe(false);
      });
    });
  });
});
