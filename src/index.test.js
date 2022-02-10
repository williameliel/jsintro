
import {
  mapExample,
  nameFilter,
  nameFinder,
  reducerFromArrayToInt,
  reducerFromArrayToObject,
  concatenateUsingSpreadArray,
  concatenateUsingSpreadObject,
  uniqueWithSet,
  forEachExample,
  optionalChaining,
  conditionalRendering,
  fetchPromiseExample,
  fetchAsyncExample
} from './index';

describe('js intro', () => {
  const users = [
    {
      firstName: "Mike",
      lastName: "Sernandez",
      age: 64,
      hobby: "cooking",
      hobbies: {
        hobby1: "cooking",
        hobby2: "sleeping"
      }
    },
    {
      firstName: "Bruno",
      lastName: "Madrigal",
      age: 56
    },
    {
      firstName: "Todd",
      lastName: "Bonzalez",
      age: 56,
    },
    {
      firstName: "Jacob",
      lastName: "Black",
      age: 65,
      hobbies: {
        hobb1: "driving",
        hobby2: "sleeping"
      }
    }
  ];

  const animals = [
    {
      name: 'Lion',
      category: 'carnivore'
    },
    {
      name: 'dog',
      category: 'pet'
    },
    {
      name: 'cat',
      category: 'pet'
    },
    {
      name: 'wolf',
      category: 'carnivore'
    }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  })

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(users),
    })
  );

  describe('mapExample', () => {
    it('works', () => {
      const actual = mapExample(users);
      expect(actual).toEqual(['Mike Sernandez', 'Bruno Madrigal', 'Todd Bonzalez', 'Jacob Black'])
      expect(actual.length).toEqual(4)
    });
  });

  describe('forEach', () => {
    it('works', () => {
      jest.spyOn(global.console, 'log')
      forEachExample(users);

      expect(console.log).toHaveBeenCalledWith('Mike');
      expect(console.log).toHaveBeenCalledWith('Bruno');
      expect(console.log).toHaveBeenCalledWith('Jacob');
      expect(console.log).toHaveBeenCalledWith('Todd');
    });
  });

  describe('nameFilter', () => {
    it('works', () => {
      const actual = nameFilter(users, 'Mike');
      expect(actual).toEqual([{
        firstName: "Mike",
        lastName: "Sernandez",
        age: 64,
        hobby: "cooking",
        hobbies: {
          hobb1: "cooking",
          hobby2: "sleeping"
        }
      }])
    })
  })

  describe('nameFinder', () => {
    it('works', () => {
      const actual = nameFinder(users, 'Mike');
      expect(actual).toEqual({
        firstName: "Mike",
        lastName: "Sernandez",
        age: 64,
        hobby: "cooking",
        hobbies: {
          hobb1: "cooking",
          hobby2: "sleeping"
        }
      })
    })
  })

  describe('reducerFromArrayToInt', () => {
    it('works', () => {
      const actual = reducerFromArrayToInt(users);
      expect(actual).toEqual(241)
    });
  });

  describe('reducerFromArrayToObject', () => {
    it('works', () => {
      const actual = reducerFromArrayToObject(users);
      expect(actual).toEqual({ total: 241 })
    });
  });

  describe('concatenateUsingSpreadArray', () => {
    it('works', () => {
      const array1 = [1, 2, 3];
      const array2 = [4, 5, 6];

      const actual = concatenateUsingSpreadArray(array1, array2);
      expect(actual).toEqual([1, 2, 3, 4, 5, 6])
    });
  });

  describe('concatenateUsingSpreadObject', () => {
    it('works', () => {
      const object1 = { name: 'Mike', age: 42 }
      const object2 = { pet: 'Puppies' }

      const actual = concatenateUsingSpreadObject(object1, object2);
      expect(actual).toEqual({ name: 'Mike', age: 42, pet: 'Puppies' })
    });
  });

  describe('uniqueWithSet', () => {
    it('works', () => {
      const actual = uniqueWithSet(animals);
      expect(actual).toEqual(["carnivore", "pet"])
    });
  });

  describe('optionalChaining', () => {
    it('works', () => {
      const mock = jest.spyOn(global.console, 'log')

      optionalChaining(users);

      expect(mock).toHaveBeenNthCalledWith(1, 'sleeping');
      expect(mock).toHaveBeenNthCalledWith(2, undefined);
      expect(mock).toHaveBeenNthCalledWith(3, undefined);
      expect(mock).toHaveBeenNthCalledWith(4, 'sleeping');
    });
  });

  describe('conditionalRendering', () => {
    it('works', () => {
      const mock = jest.spyOn(global.console, 'log')

      conditionalRendering(users);

      expect(mock).toHaveBeenNthCalledWith(1, 'sleeping');
      expect(mock).toHaveBeenNthCalledWith(2, undefined);
      expect(mock).toHaveBeenNthCalledWith(3, undefined);
      expect(mock).toHaveBeenNthCalledWith(4, 'sleeping');
    });
  });

  describe('fetchPromiseExample', () => {
    it.only('works with promise', () => {
      fetchPromiseExample().then(data => {
        expect(data).toEqual(users)
      });
    });
  });

  describe('fetchAsyncExample', () => {
    it.only('works with async/await', async () => {
      const data = await fetchAsyncExample();

      expect(data).toEqual(users);
    });
  });
});
