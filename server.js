import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express()
const port = 3000
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

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

app.get("/index.js", (req, res)=>{
  res.sendFile(__dirname + "/dist/index.js");
})
app.get("/mainIndex.js", (req,res)=>{
  res.sendFile(__dirname+"/dist/mainIndex.js")
})
app.get("/user.js", (req, res)=>{
  res.sendFile(__dirname + "/dist/user.js");
})
app.get("/user", (req, res)=>{
  res.sendFile(__dirname + "/dist/user.js");
})
app.get("/newDocImg.jpg", (req, res)=>{
  res.sendFile(__dirname+"/newDocImg.jpg")
})
app.get("/blankImg.jpg", (req, res)=>{
  res.sendFile(__dirname+"/blankImg.jpg")
})

app.get("/eventListener.js", (req, res)=>{
  res.sendFile(__dirname + "/dist/eventListener.js");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})