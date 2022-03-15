const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get(`/`, (req, res) => {
  let htmlData = `<style>.outerDiv{
    background:linear-gradient(to top, #c26dbc, #4c5270);
    height:100vh;
    text-align:center;
  }
  </style>
    <div class="outerDiv">
      <h1>Please Enter the Operation in URL as follow</h1>
      
        <b>Note:</b> pass the parameter as 
        <p>Addition - add</p><p> subtraction - subtract</p><p>Multiplication - multiply</p><p> Division - divide
      </p>
    </div>
  );`;

  res.send(htmlData);
});
app.get("/:operation", (req, res) => {
  console.log(req.params);
  let htmlData = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Calculation</title>
      <style>
        body {
          background: linear-gradient(to top, #c26dbc, #4c5270);
          height: 100vh;
        }
        input {
          display: block;
          margin: 10px;
          padding: 10px;
          width: 500px;
          border-radius: 10px;
          border: 3px solid white;
        }
  
        button {
          width: 500px;
          margin: 10px;
          padding: 10px;
          background-color: #2ff3e0;
          border-radius: 10px;
          border: 3px solid lightyellow;
          font-weight: bold;
        }
        form {
          width: fit-content;
          border: 2px solid white;
          padding: 10px;
          margin: auto;
          margin-top: 20px;
          border-radius: 10px;
        }
        h1 {
          text-align: center;
          color: white;
        }
        p {
          text-align: center;
        }
      </style>
    </head>
    <body>
      <form action="/result/${req.params.operation}" method="post">
        <h1>Enter Values</h1>
        <input type="number" placeholder="Enter a Number" name="numOne" />
        <input type="number" placeholder="Enter a Number" name="numTwo" />
        <button>Submit</button>
      </form>
    </body>
  </html>
  `;
  res.send(htmlData);
});
app.post("/result/:operation", (req, res) => {
  let a = parseInt(req.body.numOne);
  let b = parseInt(req.body.numTwo);
  let result = NaN;
  // eslint-disable-next-line default-case
  switch (req.params.operation) {
    case "add":
      result = a + b;
      break;
    case "subtract":
      result = a - b;
      break;
    case "multiply":
      result = a * b;
      break;
    case "divide":
      result = a / b;
      break;
  }
  res.send(`<style>.outerDiv{
  background:linear-gradient(to top, #c26dbc, #4c5270);
  height:100vh;
}
.divBox{
text-align:center;
width:500px;
margin:auto;
border-bottom: 3px solid white;color:white;}</style><div class="outerDiv"><div class="divBox"><h1>The ${req.params.operation} of ${a} and ${b} is <b>${result}</h1></div></div></b>`);
});
app.listen(3001);
console.log("app is running at port 3002");
