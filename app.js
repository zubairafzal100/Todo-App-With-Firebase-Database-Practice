var taskList = document.getElementById("task-list");

function addTask() {
    var taskInput = document.getElementById("task-input");
    var li = document.createElement("li");
    li.setAttribute("class", "D-li")
    var liText = document.createTextNode(taskInput.value);
    var liDiv = document.createElement("div");
    liDiv.setAttribute("class", "li-div");
    var btnDiv = document.createElement("div");
    btnDiv.setAttribute("class", "btn-div")
    li.appendChild(liText);
    liDiv.appendChild(li);
    taskList.appendChild(liDiv);
    taskInput.value = "";
    // Create Edit Button
    var editBtn = document.createElement("button");
    editBtn.setAttribute("class", "btn bottom-btn-1 btn-outline-success")
    editBtn.setAttribute("onclick", "editTask(this)")
    var btnText = document.createTextNode("EDIT");
    editBtn.appendChild(btnText);
    btnDiv.appendChild(editBtn);
    liDiv.appendChild(btnDiv);
    taskList.appendChild(liDiv);
    // Create Delete Button
    var delBtn = document.createElement("button");
    delBtn.setAttribute("class", "btn bottom-btn-2 btn-outline-danger")
    delBtn.setAttribute("onclick", "deleteTask(this)")
    var btnText = document.createTextNode("DELETE");
    delBtn.appendChild(btnText);
    btnDiv.appendChild(delBtn);
    liDiv.appendChild(btnDiv);
    taskList.appendChild(liDiv);
}

function editTask(e) {
    var updatedValue = prompt("Please update your task", e.parentNode.parentNode.firstChild.firstChild.nodeValue);
    e.parentNode.parentNode.firstChild.firstChild.nodeValue = updatedValue;
}

function deleteTask(e) {
    e.parentNode.parentNode.remove();
}

function deleteAllTask() {
    taskList.innerHTML = "";
}