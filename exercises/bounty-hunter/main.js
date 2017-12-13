const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const uuidv4 = require('uuid/v4');

app.use(bodyParser.json());

let bounties = [
  {
    "firstName": "Darth",
    "lastName": "Sidious",
    "living": true,
    "bounty amount": 100000,
    "type": "Sith",
    "id": "4c9a3ea6-143e-416b-ad6f-f2b90f480e8b"
    }
]

app.get("/bounty", (req, res)=>{
    return res.send(bounties);
});

app.get("/bounty/:id", (req, res) => {
  const bounty = bounties.find(item => item.id === req.params.id);
  return res.send(bounty);
});

app.post("/bounty", (req, res)=>{
  req.body.id = uuidv4();
  bounties.push(req.body);
  return res.send({message: "Bounty added:", object: req.body});
});

app.delete("/bounty/:id", (req, res)=>{
  bounties.filter(item => {
    item.id !== req.params.id;
    return res.send({msg: "Item's GONE"});
  })
});

app.put("/bounty/:id", (req, res) => {
  const index = bounties.findIndex(item => item.id === req.params.id);
  const foundBounty = bounties[index];
  for (let prop in foundBounty) {
    if (foundBounty.hasOwnProperty(prop)) {
      foundBounty[prop] === req.body[prop] || foundBounty[prop]
    }
  }
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}!`)
});
