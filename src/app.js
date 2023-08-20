const express = require('express');
const app = express();
const path = require("path")

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "pages/editor/editor.html"));
});

app.get('/script.js', function (req, res) {
  res.sendFile(path.join(__dirname, "pages/editor/script.js"));
});

app.get('/eventListeners.js', function (req, res) {
  res.sendFile(path.join(__dirname, "pages/editor/eventListeners.js"));
});
app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, "pages/editor/style.css"));
});


// app.get("/editor.html", function(req, res) {
//     res.sendFile(path.join(__dirname, "editor.html"));
// })


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});