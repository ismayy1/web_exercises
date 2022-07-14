const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const https = require('https')

const app = express()

app.use(express.static('public'))
// app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/signup.html')
})

app.post('/', function(req, res) {
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const email = req.body.email

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LANAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const url = 'https://us10.api.mailchimp.com/3.0/lists/247c3f5178';

  const options = {
    method: "POST",
    auth: "ismail1:70fc10ccfe830ed8ec891358e3f7ca26-us10"
  }

  const request = https.request(url, options, function(response) {

    if(response.statusCode === 200) {
      // res.send("Success! " + response.statusCode);
      res.sendFile(__dirname + "/success.html");
    } else {
      // res.send("Error: " + response.statusCode);
      res.sendFile(__dirname + "/failure.html");
    }
    
    response.on("data", function(data) {
      console.log(JSON.parse(data));
    })
  })

  request.write(jsonData)
  request.end()

  // console.log(firstName, lastName, email)
})

app.post("/failure", function(req, res) {
  res.redirect("/");
})

app.listen(process.env.PORT || 3000, function () {
  console.log('server is running on port 3000');
})

// 70fc10ccfe830ed8ec891358e3f7ca26-us10
// 247c3f5178