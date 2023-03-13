import { findUserWithFullName } from './findUserWithFullName';

describe('The findUserWithFullName function', () => {
  let usersArray;
  beforeEach(() => {
    usersArray = [
      {
        firstName: 'John',
        lastName: 'Smith',
        heightInCm: 184,
      },
      {
        firstName: 'Kate',
        lastName: 'Williams',
        heightInCm: 169,
      },
    ];
  });
  describe('when provided with full name, that exists in array', () => {
    it('should return users height', () => {
      const kate = findUserWithFullName(usersArray, 'Kate Williams');
      expect(kate.heightInCm).toBe(169);
    });
  });
  describe('when provided with full name, that does not exists in array', () => {
    it('should return undefined', () => {
      expect(findUserWithFullName(usersArray, 'Jacek Placek')).toBe(undefined);
    });
  });
});
