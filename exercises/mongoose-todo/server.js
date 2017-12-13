const mongoose = require(`mongoose`)
mongoose.connect(`mongodb://localhost/todo`)

const Schema = mongoose.Schema;

const toDoSchema = new Schema({
  title: String,
  description: String,
  dueOn: String,
  finished: Boolean
})

const ToDo = mongoose.model("ToDo", toDoSchema)

let myToDo = new ToDo({
  title: "laundry",
  description: "dark load",
  dueOn: "Wednesday",
  finished: false
});

myToDo = new ToDo({
  title: "laundry",
  description: "white load",
  dueOn: "Tuesday",
  finished: false
});

myToDo = new ToDo({
  title: "car maintenance",
  description: "get the back right tire repaired",
  dueOn: "Monday",
  finished: true
})

myToDo.save((err, todo) => {
  console.log(todo, "Successfully added");
})

ToDo.find((err, todos) => {
  console.log(todos);
})
