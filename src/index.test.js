
import { mapExample, nameFilter, nameFinder, reducerFromArrayToInt, reducerFromArrayToObject } from './index';


describe('js intro', () => {
  const names = [{
    firstName: 'Mike',
    lastName: 'Sernandez',
    age: 44
  },
  {
    firstName: 'Todd',
    lastName: 'Bonzalez',
    age: 40
  }
  ];

  describe('mapExample', () => {
    it('returns concatenated names', () => {
      const actual = mapExample(names);
      expect(actual).toEqual(['Mike Sernandez', 'Todd Bonzalez'])
      expect(actual.length).toEqual(2)
    })
  })

  describe('nameFilter', () => {
    it('returns array with matches', () => {
      const actual = nameFilter(names, 'Mike');
      expect(actual).toEqual([{
        firstName: 'Mike',
        lastName: 'Sernandez',
        age: 44,
      }])
    })
  })

  describe('nameFinder', () => {
    it('works', () => {
      const actual = nameFinder(names, 'Mike');
      expect(actual).toEqual({
        firstName: 'Mike',
        lastName: 'Sernandez',
        age: 44,
      })
    })
  })

  describe('reducerFromArrayToInt', () => {
    it('works', () => {
      const actual = reducerFromArrayToInt(names);
      expect(actual).toEqual(84)
    });
  });

  describe('reducerFromArrayToObject', () => {
    it('works', () => {
      const actual = reducerFromArrayToObject(names);
      expect(actual).toEqual({ total: 84 })
    });
  });
})
