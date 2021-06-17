const express = require("express")
const app = express()

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {

    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)
    result = num1 + num2
    console.log(result)
    res.render("/")
    res.send("Result is " + result)
})

app.listen("8000", () => {
    console.log("Port opened in 8000")
})