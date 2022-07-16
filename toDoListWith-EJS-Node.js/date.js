//jshint eversion:
// console.log(module)

// function getDate() {
  exports.getDate = function () {
  const today = new Date()
  
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }
  
  return today.toLocaleDateString("en-US", options)
}
// module.exports.getDate = getDate

// function getDay() {
  exports.getDay = function () {
  const today = new Date()
  
  const options = {
    weekday: "long"
  }
  
  return today.toLocaleDateString("en-US", options)
}

// module.exports.getDay = getDay