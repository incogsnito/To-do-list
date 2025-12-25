let unOrdered = document.getElementById("task-preview");




document.getElementById("plus").addEventListener("click", function () {
  let list = document.createElement("li"); //Create list element.

  list.setAttribute("class", "list-style");
  //Give it a class.

  const addTask = document.getElementById("fadd-task").value;
  list.innerHTML = addTask; //This code grabs the value given in the input field

  if (addTask) {
    unOrdered.append(list);
  } else {
    alert("Please input a task!");
    /* This will then append the created list and fill it with content.
    If input field is left empty, then an alert will pop up.
     */
  }
});
