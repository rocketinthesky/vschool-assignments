// Make an array of 4 student objects (with name, age, an array, and a boolean) and print each student's name and age to the console

var studentObjects = [
  student1 = {
    name: 'Harry',
    age: 18,
    hobbies: ['being grounded', 'annoying Snape', 'Quidditch'],
    isMudBlood: false
  },

  student2 = {
    name: 'Hermione',
    age: 18,
    hobbies: ['studying', 'pronouncing leviosa', 'saving everyone'],
    isMudBlood: true
  },

  student3 = {
    name: 'Ron',
    age: 18,
    hobbies: ['living in a large family', 'hanging out with Harry & Hermione', 'barely passing his classes'],
    isMudBlood: false
  },

  student4 = {
    name: 'Tom',
    age: 50,
    hobbies: ['making horcruxes', 'cursing the DADA position', 'losing to children'],
    isMudBlood: true
  }
]

for (i = 0; i < studentObjects.length; i++) {
  console.log(studentObjects[i].name, studentObjects[i].age);
}
