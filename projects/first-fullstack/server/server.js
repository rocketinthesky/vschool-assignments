const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 9000;
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "..", "client", "build")));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${port}`,
    {useMongoClient: true},
    err => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

const AddEntry = new Schema ({
  date: {
    type: Date,
    default: Date.now
  },
  location: {
    lat: Number,
    long: Number
  },
  description: String
})

const add = mongoose.model(`AddEntry`, AddEntry);


app.use(express.static("client/src"));

app.get(`/entries`, (req, res) => {
  add.find((err, entries) => {
    if (err) return res.status(500).send(err);
    res.send(entries);
  })
});

app.get(`/entries/:id`, (req, res) => {
  let {entry} = request.params
  new add({entry}).save((err, savedEntry) => {
    if (err) return res.status(500).send(err);
    res.send(savedEntry);
  })
});

app.post("/entries", (req, res) => {
  let newEntry = new add(req.body);
  newEntry.save((err, item) => {
    if (err) return res.status(500).send(err);
    res.send(item);
  })
});

app.delete(`/entries/:id`, (req, res) => {
  entries.filter(item => {
  item.id !== req.params.id;
  return res.send({msg: "Entry Removed"});
})
});

app.put("/entries/:id", (req, res) => {
const index = entries.findIndex(item => item.id === req.params.id);
const foundEntry = entries[index];
for (let prop in foundEntry) {
if (foundEntry.hasOwnProperty(prop)) {
  foundEntry[prop] === req.body[prop] || foundEntry[prop]
}
}
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"))
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port} starting at ${new Date()}`);
});
