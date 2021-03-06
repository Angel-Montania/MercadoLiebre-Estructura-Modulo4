const express = require("express");
const app = express();
const path = require("path")

app.use(express.static("public"))


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.listen(8080, (req, res) => {
    console.log("Servidor levantado: Puerto 8080")
})