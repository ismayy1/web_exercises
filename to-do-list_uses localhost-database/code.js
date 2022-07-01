// Getting all the needed variables here
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".toDoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
  let userData = inputBox.value; //getting value from user
  if(userData.trim() != 0){ //if user values are not only spaces
    addBtn.classList.add("active");  //activate the add button
  } else {
    addBtn.classList.remove("active");  //unactivate the add button
  }
}

showTask();   //Calling a showTask function

// If user clicks on the add button

addBtn.onclick = ()=>{  

  let userData = inputBox.value; //getting value from user

  let getLocalStorage = localStorage.getItem("New todo"); //getting local storage
  if(getLocalStorage === null){ //if local storage is null
    listArr = [];  //creating a blank array
  } else {
    listArr = JSON.parse(getLocalStorage);  //transforming json string into a js object
  }
  listArr.push(userData); //pushing or adding user input
  localStorage.setItem("New todo", JSON.stringify(listArr));  //transforming js object into a json string

  showTask();   //Calling a showTask function
}

// function to add task into a ul
function showTask(){
  let getLocalStorage = localStorage.getItem("New todo"); //getting local storage
  if(getLocalStorage === null){ //if local storage is null
    listArr = [];  //creating a blank array
  } else {
    listArr = JSON.parse(getLocalStorage);  //transforming json string into a js object
  }

  // changing the number of the pending elements
  const pendingNumber = document.querySelector(".pendingNumber");
  pendingNumber.textContent = listArr.length;   //passing the number of the pending tasks into pendingNumber

  // activating a delete button
  if(listArr.length > 0){   //if array length is greater than 0
    deleteAllBtn.classList.add("active");   //active the clearAll button
  } else{
    deleteAllBtn.classList.remove("active");    //unactive the clearAll button
  }

  // adding new input into a inputField
  let newliTag = '';
  listArr.forEach((element, index) =>{
    newliTag += `<li> ${element} <span onclick = "deleteTask(${index})"; ><i class="btn btn-trash">Del</i></span></li>`;
  });
  todoList.innerHTML = newliTag;  //adding new li tag inside ul tag
  inputBox.value = "";    //Once a new input added leave the field empty
}

//function to delete an item from ul
function deleteTask(index){
  let getLocalStorage = localStorage.getItem("New todo");
  listArr = JSON.parse(getLocalStorage);
  listArr.splice(index, 1);   //delete a particular indexed li item

  // After deleting the item update the local storage
  localStorage.setItem("New todo", JSON.stringify(listArr));  //transforming js object into a json string
  showTask();   //Calling a showTask function
}

//function to delete all tasks
deleteAllBtn.onclick = ()=>{
  listArr = []; //an empty array

  // After deleting all the items again update the local storage
  localStorage.setItem("New todo", JSON.stringify(listArr));  //transforming js object into a json string
  showTask();   //Calling a showTask function
}
