function addTask(clicked) {
  if (clicked.target.classList.contains("input-button")) {
    const taskList = document.querySelector(".task-list");
    let task = document.querySelector(".input-item").value;
    if (task === "") {
      alert("Please write valid task");
      return;
    }
    let listItem = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";

    let taskText = document.createElement("span");
    taskText.innerText = task;

    let taskDeleteButton = document.createElement("button");
    taskDeleteButton.textContent = "🗑️";

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(taskDeleteButton);

    taskList.appendChild(listItem);

    document.querySelector(".input-item").value = "";
  } else if (clicked.target.classList.contains("task-checkbox")) {
    const taskText = clicked.target.nextElementSibling;
    if (clicked.target.checked) {
      taskText.style.textDecoration = "line-through";
    } else {
      taskText.style.textDecoration = "none";
    }
  } else if (clicked.target.tagName === "BUTTON") {
    const taskItem = clicked.target.parentElement;
    taskItem.remove();
  }
}

document.querySelector(".list-box").addEventListener("click", addTask);
