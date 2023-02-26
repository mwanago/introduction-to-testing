import { getDayOfTheWeek } from './getRandomDayOfTheWeek';

describe('The getDayOfTheWeek function', () => {
  describe('If provided with number 0', () => {
    it('should return Monday', () => {
      expect(getDayOfTheWeek(0)).toBe('Monday');
    });
  });
});
