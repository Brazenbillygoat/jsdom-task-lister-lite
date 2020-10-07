
// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, the task string that I provided should appear on the DOM after the submit button has been activated.


document.addEventListener("DOMContentLoaded", () => {
  newTaskHandler()
});

function newListItem(value) {
  let taskList = document.getElementById("tasks")
  let task = document.createElement("li")
  let deleteButton = document.createElement("button")

  deleteButton.innerText = "X"
  task.innerText = value

  task.appendChild(deleteButton)
  taskList.appendChild(task)

  document.querySelector("#new-task-description").value = ""
  // console.log("I should be last though")
}

const newTaskHandler = () => {
  let submitButton = document.querySelector(".sub-button")
  submitButton.addEventListener("click", getValue, () => {console.log("I'm last")})
}

function getValue(event) {
  event.preventDefault()
  let newTodo = document.querySelector("#new-task-description").value
  newListItem(newTodo)
  // console.log(newTodo)
}

