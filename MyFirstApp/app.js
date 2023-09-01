//1.create an express instance
const express = require("express");
const app = express();

const path = require("path");

//2.set the port to 3000
const port = 3000;

//3.load the files in public directory
app.use("/static", express.static(path.join(__dirname, "public")));

//4.send a GET request to the server and recevie a response with "This is my first app part1!" on the homepage
app.get("/", (req, res) => res.send(" This is my first app part 1! "));

//5.send a GET request to the server and recevie a response with tranferring the file lab1part1.html to the given path "/lab1part1"
app.get("/lab1part1", (req, res) => {
  res.sendFile(__dirname + "/lab1part1.html");
});
app.get("/lab1part2", (req, res) => {
  res.sendFile(__dirname + "/lab1part2.html");
});
app.get("/lab1part3", (req, res) => {
  res.sendFile(__dirname + "/lab1part3.html");
});
app.get("/lab1part4", (req, res) => {
  res.sendFile(__dirname + "/lab1part4.html");
});

//6.start the server and listen to port 3000 so we can see our homepage at http://localhost:3000 and the content of lab1part1.html at http://localhost:3000/lab1part1
app.listen(port, () =>
  console.log(` Example app
listening on port ${port}! `)
);
