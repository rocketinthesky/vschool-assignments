const express = require("express")
const app = express()
const port = 3000
const bodyParser = require("body-parser")

app.use(bodyParser.json())

const bounties = []

app.get("/bounty", (req, res)=>{
    return res.send(bounties);
});

app.post("/bounty", (req, res)=>{
  console.log(req.body);
  bounties.push(req.body)
  return res.send({message: "here is your new target", object: req.body});
})

// app.delete()

// app.put()

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}!`)
})
