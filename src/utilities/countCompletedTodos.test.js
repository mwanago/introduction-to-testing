import { countCompletedTodods } from './getNumberOfCompletedTodos';

describe('The countCompletedTodos function', () => {
  let todos;
  describe('when provided with correct array of todos', () => {
    beforeEach(() => {
      todos = [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: true,
        },
        {
          userId: 1,
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: 'fugiat veniam minus',
          completed: true,
        },
      ];
    });
    it('should return number of completed todos', () => {
      expect(countCompletedTodods(todos)).toBe(2);
    });
  });
});
