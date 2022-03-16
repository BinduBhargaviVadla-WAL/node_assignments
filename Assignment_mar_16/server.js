const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  let htmldata = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Car rental</title>
      <style>
        body {
          background: radial-gradient(circle, rgb(0, 70, 128), rgb(49, 3, 49));
          background-repeat: no-repeat;
          height: 100vh;
        }
        .container {
          display: flex;
          flex-wrap: wrap;
        }
        .item {
          background-color: #f1f1f1;
          padding: 10px;
          flex: 50%;
        }
      </style>
    </head>
    <body>
      <div><h1>March - 16 Assignment</h1></div>
    </body>
  </html>
  `;
  console.log(__dirname);
  const completePath = path.join(__dirname, "home.html");
  res.sendFile(completePath);
});
app.get("/login", function (req, res) {
  console.log(__dirname);
  const completePath = path.join(__dirname, "loginForm.html");
  res.sendFile(completePath);
});
app.post("/checkDetails", function (req, res) {
  let user = req.body.userName;
  let password = req.body.password;
  let result = "";
  if ((user === "sumit") & (password === "abc")) {
    result = "Your are Logged In";
  } else {
    result = "Please check User Name and Password";
  }
  let htmlResponse = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Car rental</title>
      <style>
        body {
          background: radial-gradient(circle, white, rgb(0, 70, 128));
          /* background-repeat: no-repeat; */
          height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
        .container {
          width:fit-content;
          margin: auto;
          box-shadow: 10px 10px 12px 6px rgba(7, 7, 7, 0.541);
          background-color: white;
          padding:0 10px;
        }
        h1 {
          font-weight: 300;
          text-align: center;
          margin-bottom: 20px;
          font-size: 45px;
        }
        a {
            margin-left: 20px;
            font-weight: 600;
            position: relative;
            margin-left: 50px;
            color:white;
          }
      </style>
    </head>
    <body>
      <div>
      <a href="/">Home</a>
        <div class="container">       
          <h1>${result}</h1>
        </div>
      </div>
    </body>
  </html>
  `;
  res.send(htmlResponse);
});
app.get("/addCar", function (req, res) {
  let fullPath = path.join(__dirname, "/carForm.html");
  res.sendFile(fullPath);
});
app.get("/show", function (req, res) {
  let fullPath = path.join(__dirname, "/show.html");
  res.sendFile(fullPath);
});
app.listen(3001);
console.log("Program started listening on port 3001");
