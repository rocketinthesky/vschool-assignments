const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/people')

const Schema = mongoose.Schema;

const friendSchema = new Schema({
  name: String,
  age: Number,
  interests: [String],
  friends: [String]
})

const Friend = mongoose.model('Friend', friendSchema)

const myFriend = new Friend({
    name: "JD",
    age: 24,
    interests: ['Music', 'Food'],
    friends: []
});

// myFriend.save((err, friend)=>{
//     console.log(friend, "Successfully added")
// })

Friend.findOne({name: "JD"}, (err, friend)=>{
    friend.remove((err, friend) => {
        console.log(friend, "Successfully added")
    })
})

Friend.find((err, friends) => {
    console.log(friends)
})
