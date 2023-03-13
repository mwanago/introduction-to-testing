import { shouldSetAlarm } from './sholdSetAlarm';

describe('The shouldSetAlarm function', () => {
  describe('If person is employed and not on vacation', () => {
    it('should return true', () => {
      const personData = {
        isEmployed: true,
        isOnVacation: false,
      };
      expect(shouldSetAlarm(personData)).toBe(true);
    });
  });
  describe('If person is employed and on vacation', () => {
    it('should return false', () => {
      const personData = {
        isEmployed: true,
        isOnVacation: true,
      };
      expect(shouldSetAlarm(personData)).toBe(false);
    });
  });
  describe('If person is not employed and not on vacation', () => {
    it('should return false', () => {
      const personData = {
        isEmployed: false,
        isOnVacation: false,
      };
      expect(shouldSetAlarm(personData)).toBe(false);
    });
  });
  describe('If person is not employed and on vacation', () => {
    it('should return false', () => {
      const personData = {
        isEmployed: false,
        isOnVacation: true,
      };
      expect(shouldSetAlarm(personData)).toBe(false);
    });
  });
});
