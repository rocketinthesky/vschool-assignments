function copyCat(obj){
  return Object.assign({}, obj); //this does everything the commented code below does

  // const copy = {};
  // for (let prop in obj) {
  //   copy[prop] = obj[prop]
  // }
  // return copy;
}

const person = {name: "Joe"}
const copy = copyCat(person);

console.log(person.name);
console.log(copy.name);

person.name = "Jane"

console.log(person.name);

console.log(copy.name);
