let unOrdered = document.getElementById("task-preview");

document.getElementById("plus").addEventListener("click", function () {
  let list = document.createElement("li");

  list.setAttribute("class", "list-style")

  const addTask = document.getElementById("fadd-task").value;
  list.innerHTML = addTask;

  if (addTask) {
    unOrdered.append(list);
  } else {
    alert("Please input a task!");
  }
});
