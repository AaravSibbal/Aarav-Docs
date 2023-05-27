const express = require('express')
const app = express()
const path  = require("path")
const port = 3000

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});
app.get("/style.css", (req, res)=>{
  res.sendFile(__dirname + "/html/style.css");
})
app.get("/scripts/index.js", (req, res)=>{
  res.sendFile(__dirname + "/html/scripts/index.js");
})
app.get("/scripts/user.js", (req, res)=>{
  res.sendFile(__dirname + "/html/scripts/user.js");
})
app.get("/scripts/user", (req, res)=>{
  res.sendFile(__dirname + "/html/scripts/user.js");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})