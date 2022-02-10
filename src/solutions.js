const mapExample = (names) => {
  return names.map((name) => `${name.firstName} ${name.lastName}`)
}

const forEachExample = (names) => {
  names.forEach((name) => {
    console.log(name.firstName)
  })
}

const nameFilter = (names, nameToFilter) => {
  return names.filter((name) => name.firstName === nameToFilter)
}

const nameFinder = (names, nameToFind) => {
  return names.find((name) => name.firstName === nameToFind)
}

const reducerFromArrayToInt = (values) => {
  return values.reduce((sum, values) => {
    return sum += values.age;
  }, 0)
}

const reducerFromArrayToObject = (values) => {
  return values.reduce((sum, values) => {
    sum.total += values.age;
    return sum;
  }, { total: 0 })
}

const concatenateUsingSpreadArray = (array1, array2) => {
  return [...array1, ...array2]
}

const concatenateUsingSpreadObject = (object1, object2) => {
  return { ...object1, ...object2 }
}

const uniqueWithSet = (values) => {
  return [...new Set(values.map(value => value.category))]
}

const optionalChaining = (values) => {
  values.forEach((user) => {
    console.log(user?.hobbies?.hobby2);
  });
}

const conditionalRendering = (values) => {
  values.forEach((user) => {
    console.log(user.hobbies && user.hobbies.hobby2);
  });
}

const fetchPromiseExample = () => {
  return fetch("https://example.com")
    .then((response) => {
      return response.json()
    }).then((data) => {
      return (data);
    })
    .catch((err) => console.log(err));
}

const fetchAsyncExample = async () => {
  const result = await fetch("https://example.com");
  return result.json()
}


