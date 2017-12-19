const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uuidv4 = require('uuid/v4');

app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost/${port}`,
    {useMongoClient: true},
    err => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

const EntrySchema = new Schema ({
  date: {
    type: Date,
    default: Date.now
  },
  location: {
    lat: Number,
    long: Number
  },
  description: String,
  id: String
})

// Check if the server is working correctly
// app.get("/", (req, res) => {
//     res.send("It's working!");
// });

// const server = () => {}

app.use(express.static("client/src"));

app.get(`/entries`, (req, res) => {
  EntrySchema.find((err, entries) => {
    if (err) return res.status(500).send(err);
    res.send(entries);
  })
});

app.get(`/entries/:id`, (req, res) => {
  let {entry} = request.params
  new EntrySchema({entry}).save((err, savedEntry) => {
    if (err) return res.status(500).send(err);
    res.send(savedEntry);
  })
});

app.post("/entries", (req, res) => {
  req.body.id = uuidv4();
  entries.push(req.body);
  return res.send({message: "Entry added:", object: req.body});
});

app.delete(`/entries/:id`, (req, res) => {
  entries.filter(item => {
  item.id !== req.params.id;
  return res.send({msg: "Entry Removed"});
})
});

app.put("/bounty/:id", (req, res) => {
const index = entries.findIndex(item => item.id === req.params.id);
const foundEntry = entries[index];
for (let prop in foundEntry) {
if (foundEntry.hasOwnProperty(prop)) {
  foundEntry[prop] === req.body[prop] || foundEntry[prop]
}
}
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port} starting at ${new Date()}`);
});

// export default server;
