import { getDayOfTheWeek } from './getRandomDayOfTheWeek';

describe('The getDayOfTheWeek function', () => {
  describe('If provided with number 0', () => {
    it('should return Monday', () => {
      expect(getDayOfTheWeek(0)).toBe('Monday');
    });
  });
  describe('If provided with number 1', () => {
    it('should return Tuesday', () => {
      expect(getDayOfTheWeek(1)).toBe('Tuesday');
    });
  });
  describe('If provided with number 2', () => {
    it('should return Wednesday', () => {
      expect(getDayOfTheWeek(2)).toBe('Wednesday');
    });
  });
  describe('If provided with number 3', () => {
    it('should return Thursday', () => {
      expect(getDayOfTheWeek(3)).toBe('Thursday');
    });
  });
  describe('If provided with number 4', () => {
    it('should return Friday', () => {
      expect(getDayOfTheWeek(4)).toBe('Friday');
    });
  });
  describe('If provided with number 5', () => {
    it('should return Saturday', () => {
      expect(getDayOfTheWeek(5)).toBe('Saturday');
    });
  });
  describe('If provided with number 6', () => {
    it('should return Saturday', () => {
      expect(getDayOfTheWeek(6)).toBe('Sunday');
    });
  });
  describe('If provided with number 7', () => {
    it('should return undefined', () => {
      expect(getDayOfTheWeek(7)).toBe(undefined);
    });
  });
});
