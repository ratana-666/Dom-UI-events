// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function displayTasks(taskList) {
  // 1. Select the container
  const container = document.querySelector(".container");

  // 2. Clear old tasks (Step 2 requirement)
  let oldList = document.getElementById("result");
  if (oldList) { oldList.remove(); }

  // 3. Build new list
  const div = document.createElement("div");
  div.id = "result";

  taskList.forEach(task => {
    const item = document.createElement("div");
    item.textContent = task.description;
    item.classList.add("item");
    // Priority 0 = GREY, Priority 1 = RED
    item.style.backgroundColor = task.priority === 1 ? "red" : "grey";
    div.appendChild(item);
  });

  container.appendChild(div);
}

function addItem() {
  // 1- Create a new task
  let newTask = {};

  // 2- Set the description from the text field
  newTask.description = document.getElementById("description").value;

  // 3- Set the priority from select field
  let priorityValue = document.getElementById("priority").value;
  newTask.priority = priorityValue === "High" ? 1 : 0;

  // 4- Add the new object to the array
  tasks.push(newTask);

  // Update DOM
  displayTasks(tasks);

  console.log(tasks);
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

// run the function addItem when you click on the button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);

// STEP 3 - Filter Buttons
document.getElementById("showImportant").addEventListener("click", function() {
  const filtered = tasks.filter(t => t.priority === 1);
  displayTasks(filtered);
});

document.getElementById("showNotImportant").addEventListener("click", function() {
  const filtered = tasks.filter(t => t.priority === 0);
  displayTasks(filtered);
});

document.getElementById("showAll").addEventListener("click", function() {
  displayTasks(tasks);
});