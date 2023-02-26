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
  describe('When provided with full name, that exists in array', () => {
    it('Should return users height', () => {
      expect(findUserWithFullName(usersArray, 'Kate Williams')).toBe(169);
    });
  });
  describe('When provided with full name, that does not exists in array', () => {
    it('Should return undefined', () => {
      expect(findUserWithFullName(usersArray, 'Jacek Placek')).toBe(undefined);
    });
  });
});
