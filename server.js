const express = require('express')
const app = express()
const path  = require("path")
const port = 3000

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/main/index.html");
    console.log(path)
});
app.get("/document", (req, res) => {
  res.sendFile(__dirname + "/html/document/document.html");
});
app.get("/style.css", (req, res)=>{
  res.sendFile(__dirname + "/html/document/style.css");
})
app.get("/mainStyle.css", (req, res)=>{
  res.sendFile(__dirname + "/html/main/mainStyle.css");
})

app.get("/scripts/index.js", (req, res)=>{
  res.sendFile(__dirname + "/scripts/document/index.js");
})
app.get("/mainIndex.js", (req,res)=>{
  res.sendFile(__dirname+"/scripts/main/mainIndex.js")
})
app.get("/scripts/user.js", (req, res)=>{
  res.sendFile(__dirname + "/scripts/user.js");
})
app.get("/scripts/user", (req, res)=>{
  res.sendFile(__dirname + "/scripts/user.js");
})
app.get("/newDocImg.jpg", (req, res)=>{
  res.sendFile(__dirname+"/newDocImg.jpg")
})

app.get("/scripts/eventListener.js", (req, res)=>{
  res.sendFile(__dirname + "/scripts/document/eventListener.js");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})