const unOrdered = document.getElementById("task-preview");

document.getElementById("plus").addEventListener("click", function () {
  let list = document.createElement("li"); //Create necessary elements.
  list.setAttribute("class", "list-style");
  //Give elements a class.

  const addTask = document.getElementById("fadd-task").value;
  list.textContent = addTask;

  //This code grabs the value given in the input field and puts it into a list.

  if (addTask) {
    unOrdered.append(list);
  } else {
    alert("Please input a task!");

    /* This will then append the created list and fill it with content.
    If input field is left empty, then an alert will pop up.
     */
  }
});

unOrdered.addEventListener("click", (e) => {
  if (e.target.classList.contains("list-style")) {
    e.target.remove();
  }
});