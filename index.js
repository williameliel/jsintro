const mapExample = (names) => {
  return names.map((person,)=>{
    return `${person.firstName} ${person.lastName}`
  })
}

const nameFilter = (names, nameToFilter) => {
  return names.filter(({firstName}) => {
    return firstName === nameToFilter
  })
}

const nameFinder = (names, nameToFind) => {
  return names.find((p)=> p.firstName === nameToFind)
}

exports.mapExample = mapExample;
exports.nameFinder = nameFinder;
exports.nameFilter = nameFilter;
