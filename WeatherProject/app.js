const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended  : true }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post("/", function(req, res) {
  console.log("POST recieved");
  console.log(req.body.cityName);
  const query = req.body.cityName;
  const apiKey = "0778b322b8c5a9318bd332089a125440"
  const units = "metric"

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;
  https.get(url, function(response){
    console.log(response.statusCode);

    response.on('data', function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      
      res.write("<p>The weather is currently " + description + "</p>");
      res.write("<h1>The temp. in " + query + " is: " + temp + " degrees Celcius.</h1>");
      res.write("<img src=" + imageUrl + ">");
      res.send();
    });
  });
});

// app.get('/', (req, res) => {
//   const query = "London"
//   const apiKey = "0778b322b8c5a9318bd332089a125440"
//   const units = "metric"

//   const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;
//   https.get(url, function(response){
//     console.log(response.statusCode);

//     response.on('data', function(data){
//       const weatherData = JSON.parse(data);
//       const temp = weatherData.main.temp;
//       const description = weatherData.weather[0].description;
//       const icon = weatherData.weather[0].icon;
//       const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      
//       res.write("<p>The weather is currently " + description + "</p>");
//       res.write("<h1>The temp. in Bucharest is: " + temp + " degrees Celcius.</h1>");
//       res.write("<img src=" + imageUrl + ">");
//       res.send();
//       // res.send("The temp. in Bucharest is: " + temp + " degrees Celcius.<br/> The weather is currently " + description);

//       console.log(temp);
//       console.log(description);

//       const object = {
//         name: "ismail",
//         favouriteFood: "dogroma"
//       }
//       console.log(JSON.stringify(object));
//       // console.log(weatherData);
//       // console.log(data);
//     })
//   })

//   // res.send("Server is up and running.")
// })


app.listen(3000, function() {
  console.log("server listening on port 3000");
});