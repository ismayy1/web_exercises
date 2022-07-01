const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.listen(port, () => {
  console.log('listening on port ' + port);
});

// app.get('/', (req, res) => {
//   res.send('Welcome to the Google');
// })

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  const num3 = num1 + num2;
  res.send('Welcome to the Google ' + num3);
})

// Challenge BMI Calculate
app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmicalculator.html');
})

app.post('/bmicalculator', (req, res) => {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);
  res.send('Your bmi is: ' + bmi);
})
