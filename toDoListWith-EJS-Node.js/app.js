const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname + '/date.js')

console.log(date)

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('view engine', 'ejs')


const items = ["Buy Food", "Cook Food", "Eat Food"]
const workItems = []

app.get("/", function(req, res) {
  // var day = ""

  // if(today.getDay() === 6 || today.getDay() === 0) {
  //   day = "Weekend"
  //   // res.send("It's the weekend!")
  // } else {
  //   day = "Weekday"
  //   // res.send("it's not the weekend!") 
  // }

  // if(today.getDay() === 6 || today.getDay() === 0) {
  //   day = "Weekend"
  // } else if(today.getDay() === 1) {
  //   day = "Monday"
  // } else if(today.getDay() ===  2) {
  //   day = "Tuesday"
  // } else if(today.getDay() === 3) {
  //   day = "Wednesday"
  // } else if(today.getDay() === 4) {
  //   day = "Thursday"  
  // } else if(today.getDay() === 5) {
  //   day = "Friday"
  // }

  // switch (today.getDay()) {
  //   case 0:
  //     day = "Sunday"
  //     break
  //   case 1:
  //     day = "Monday"
  //     break
  //   case 2:
  //     day = "Tuesday"
  //     break
  //   case 3:
  //     day = "Wednesday"
  //     break
  //   case 4:
  //     day = "Thursday"
  //     break
  //   case 5:
  //     day = "Friday"
  //     break
  //   case 6:
  //     day = "Saturday"
  //     break
  //   default:
  //     console.log("Error: Current is equal to: " + today.getDay())
  //   }
  const day = date.getDate()

  res.render('list', {listTitle: day, newListItems: items})
})
app.post('/', function(req, res) {
  const item = req.body.newItem

  if(req.body.list === 'Work'){
    workItems.push(item)
    res.redirect('/work')
  } else {
    items.push(item)
    res.redirect('/')
  }

  console.log(item)
})

// /work file 
app.get("/work", function(req, res) {
  res.render('list', {listTitle: 'Work List', newListItems: workItems})
})
// app.post('/work', function(req, res) {
//   let item = req.body.newItem
//   workItems.push(item)
//   res.redirect('/work')
// })

app.get('/about', function(req, res) {
  res.render('about')
})



app.listen(process.env.PORT || 3000, function() {
  console.log("Server listening on port 3000")
})
