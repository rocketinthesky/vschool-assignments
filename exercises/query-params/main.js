const express = require("express")
const app = express()
const port = process.env.PORT || 8000

app.get("/", (req, res)=>{
    console.log(req.query)

    const searchResults = sweaters.filter(sweater=>{

        let doesMatchAll = true

        for (prop in req.query){
            if (sweater[prop].toLowerCase() !== req.query[prop]){
                doesMatchAll = false
            }
        }

        return doesMatchAll
    })
    return res.send(searchResults)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
