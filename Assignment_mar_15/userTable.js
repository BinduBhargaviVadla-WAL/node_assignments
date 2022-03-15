const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.post("/userTable", function (req, res) {
  console.log(req.body);
  let user = req.body;
  let htmlData = `<style>
  div{background:linear-gradient(to top, #c26dbc, #4c5270);
  height: 100vh; color:white;}
  table{border-collapse:collapse;margin:auto;background-color:white;border-radius:10px}
  td,th{border-bottom:2px solid grey;border-right:2px solid grey; padding:12px 18px; text-align:left;border-radius:10px}
  h1{text-align:center;}
  </style>
  <div>
  <h1>User Details</h1>
  <table>
  <tr><th>Name</th><td>${user.userName}</td></tr>
  <tr><th>Email</th><td>${user.email}</td></tr>
  <tr><th>Password</th><td>${user.password}</td></tr>
  <tr><th>Date of Birth</th><td>${user.dob}</td></tr>
  <tr><th>City</th><td>${user.city}</td></tr>
  <tr><th>Country</th><td>${user.country}</td></tr>
  </table></div>`;
  res.send(htmlData);
});
app.get("/", function (req, res) {
  console.log(__dirname);
  const completePath = path.join(__dirname, "registrationform.html");
  res.sendFile(completePath);
});
app.listen(3001);
console.log("Program started listening on port 3001");
