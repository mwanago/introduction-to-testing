import { getBmi } from './getBmi';

describe('The getBmi function', () => {
  describe('when provided with a BMI less than or equal to 18.5', () => {
    it('should return underweight', () => {
      expect(getBmi(50, 1.8)).toBe('Underweight');
    });
  });
  describe('when provided with a BMI greater than 18.5 and less than or equal to 24.9', () => {
    it('should return underweight', () => {
      expect(getBmi(60, 1.8)).toBe('Normal');
    });
  });
  describe('when provided with a BMI greater than 24.9 and less than or equal to 29.9', () => {
    it('should return underweight', () => {
      expect(getBmi(90, 1.8)).toBe('Overweight');
    });
  });
  describe('when provided with a BMI greater than 29.9', () => {
    it('should return underweight', () => {
      expect(getBmi(100, 1.8)).toBe('Obese');
    });
  });
});
