import { getBmi } from './getBmi';

describe('The getBmi function', () => {
  describe('When provided with Bmi to 18.5', () => {
    it('should return underweight', () => {
      expect(getBmi(50, 1.8)).toBe('Underweight');
    });
  });
  describe('When provided with Bmi between more than 18.5 to 24.9', () => {
    it('should return underweight', () => {
      expect(getBmi(60, 1.8)).toBe('Normal');
    });
  });
  describe('When provided with Bmi between more than 24.9 to 29.9', () => {
    it('should return underweight', () => {
      expect(getBmi(90, 1.8)).toBe('Overweight');
    });
  });
  describe('When provided with Bmi between more than 29.9', () => {
    it('should return underweight', () => {
      expect(getBmi(100, 1.8)).toBe('Obesity');
    });
  });
});
