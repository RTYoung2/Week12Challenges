var express = require("express");

var app = express();
//Hard/database.json
var data = require("./database.json");

// app.get("/workers", (req, res) => {
//   res.send("Hello World");
// });
app.get("/workers", (req, res) => {
  if (!data) {
    res.status(404).send("Could not find information");
  }
  res.send(data);
});

app.get("/workers/:id", (req, res) => {
  const findEmployee = data.workers.find(function (employee) {
    return parseInt(req.params.id) === employee.id;
  });

  if (!findEmployee) {
    res.status(404).send("Could not find information");
  }
  res.send(data);
});

app.listen(4000);
