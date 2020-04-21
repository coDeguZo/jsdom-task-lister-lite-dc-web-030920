// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, the task string that I provided should appear on the DOM after the submit button has been activated.


// 1. select the form and add listener 
// 2. create a callback method 
      //i. prevent default 
      //a. creates a new element 
      //b. grabs the value of the form and adds that value to our new element as the innertext 
      //c. append new element to ToDos  ( Grab Ul with id="tasks")
      //d. clear form

// Delete Functionality
//    Add Ids to liNodes
//    When a li is appended, also append with it a "delete button" aka form with hidden fields 
          // creating delete form also when "create-task-form" is clicked ... (second listener)
          // similar to createing li, we create a form/delete button 
          // append that form to the li 



document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let formNode = document.getElementById("create-task-form")
  formNode.addEventListener("submit", handleForm)
});

function handleForm(event) {
  event.preventDefault()
  let desc = document.getElementById("new-task-description").value
  let name = document.getElementById("user-name").value
  let date = document.getElementById("date-due").value
  let duration = document.getElementById("duration").value
  let newColor = document.getElementById("colors").value
  createListItem(desc, name, date, duration, newColor)
  let formNode = document.getElementById("create-task-form")
  formNode.reset()
}

function createListItem(desc, name, date, duration, newColor) {
  let liNode = document.createElement("li")
  liNode.style = `color: ${newColor}; `
  liNode.innerText = `Name: ${name}, Description: ${desc}, Date: ${date}, Duration: ${duration}`
  // liNode = document.getElementById("list-item-")
  let ulNode = document.getElementById("tasks")
  ulNode.appendChild(liNode)
  let ulLength = ulNode.children.length
  liNode.id = "list-item-" + ulLength
  createDeleteButton(liNode.id)
  deleteNode = document.getElementById("Delete-"+liNode.id)
  deleteNode.addEventListener("click", deleteItem)
}

function createDeleteButton(liId) {
  console.log(`delete button for ${liId}`)
  let liNode = document.getElementById(liId)
  let deleteNode = document.createElement("BUTTON")
  deleteNode.id = "Delete-" + liId
  deleteNode.innerText = "Delete"
  liNode.appendChild(deleteNode)
} 

function deleteItem(event) {
  buttonNode = event.target
  let listNode = buttonNode.parentElement
  let ulNode = document.getElementById("tasks")
  ulNode.removeChild(listNode)
}


// <form id="delete-task-form" action="#" method="post">
// <label for=""

