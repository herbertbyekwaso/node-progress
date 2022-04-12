const express = require("express");
const fs = require("fs");
const app = express();
const port = 65500;

// Define default route with express
app.get("/", (req, res) => {
  res.send("<h1> Welcome to express server</h1>");
});

// Read file using express server
app.get("/getCourses", (req, res) => {
  fs.readFile("./db.json", (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(JSON.parse(result));
    }
  });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server is running on port: \t" + port);
});
