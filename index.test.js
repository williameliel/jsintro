
const {
  mapExample,
  nameFinder,
  nameFilter
} = require('./index');

describe('js intro', () => {
  const names = [{
      firstName: 'Mike',
      lastName: 'Sernandez'
    },
    {
      firstName: 'Todd',
      lastName: 'Bonzalez'
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
        lastName: 'Sernandez'
      }])
    })
  })

  describe('nameFinder', () => {
    it('works', () => {
      const actual = nameFinder(names, 'Mike');
      expect(actual).toEqual({
        firstName: 'Mike',
        lastName: 'Sernandez'
      })
    })
  })
})
