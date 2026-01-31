const unOrdered = document.getElementById("task-preview");

localStorage.getItem("list");

function taskAdd() {
  let list = document.createElement("li"); //Create necessary elements.
  list.setAttribute("class", "list-style");
  //Give elements a class.

  const addTask = document.getElementById("fadd-task");
  list.textContent = addTask.value;

  //This code grabs the value given in the input field and puts it into a list.

  if (addTask) {
    unOrdered.append(list);
  } else {
    alert("Please input a task!");

    /* This will then append the created list and fill it with content.
    If input field is left empty, then an alert will pop up.
     */
  }
  addTask.value = "";
}

document.getElementById("plus").addEventListener("click", () => {
  taskAdd();

  localStorage.setItem("list", unOrdered.innerHTML);
});

document.getElementById("fadd-task").addEventListener("keyup", (e) => {
  if (e.key != "Enter") return;

  localStorage.setItem("list", unOrdered.innerHTML);
  taskAdd();
});

unOrdered.addEventListener("click", (e) => {
  if (e.target.classList.contains("list-style")) {
    e.target.remove();
    localStorage.setItem("list", unOrdered.innerHTML);
  }
});

unOrdered.innerHTML = localStorage.getItem("list", unOrdered.innerHTML);
