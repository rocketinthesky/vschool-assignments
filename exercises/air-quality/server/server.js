const express = require("express");
const app = express();
const port = process.env.PORT || 7500;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/air-quality",
    {useMongoClient: true},
    err => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

// Check if the server is working correctly
// app.get("/", (req, res) => {
//     res.send("It's working!");
// });

app.use("/quality", require("./routes/airRoutes"));



app.listen(port, () => {
    console.log(`Server is listening on port ${port} starting at ${new Date()}`);
});
