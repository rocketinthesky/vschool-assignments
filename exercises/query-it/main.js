const database = [
{a: 1, b: 1, c: 2},
{a: 0, b: 0, c: 2},
{a: 0, b: 1, c: 0},
{a: 1, b: 2, c: 2}
];

function filterDatabase(query, database){
  if (Object.keys(query).length === 0) {
    return database;
  }
  const results = database.filter(obj => {
    for (let prop in query) {
      if(query[prop] !== obj[prop]) {
        return false;
      }
    }
    return true;
  });
}

console.log(filterDatabase({}, database));

console.log(filterDatabase({dolphin: "squeak!"}, database));

console.log(filterDatabase({a: 1, c: 2}, database));
