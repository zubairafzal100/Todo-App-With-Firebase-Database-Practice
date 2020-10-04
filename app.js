var taskList = document.getElementById("task-list");

firebase.database().ref('todo-items').on('child_added', function (data) {
    var li = document.createElement("li");
    li.setAttribute("class", "D-li")
    var liText = document.createTextNode(data.val().value);
    var liDiv = document.createElement("div");
    liDiv.setAttribute("class", "li-div");
    var btnDiv = document.createElement("div");
    btnDiv.setAttribute("class", "btn-div")
    li.appendChild(liText);
    liDiv.appendChild(li);
    taskList.appendChild(liDiv);
    // Create Edit Button
    var editBtn = document.createElement("button");
    editBtn.setAttribute("class", "btn bottom-btn-1 btn-outline-success");
    editBtn.setAttribute("id", data.val().key);
    editBtn.setAttribute("onclick", "editTask(this)");
    var btnText = document.createTextNode("EDIT");
    editBtn.appendChild(btnText);
    btnDiv.appendChild(editBtn);
    liDiv.appendChild(btnDiv);
    taskList.appendChild(liDiv);
    // Create Delete Button
    var delBtn = document.createElement("button");
    delBtn.setAttribute("class", "btn bottom-btn-2 btn-outline-danger");
    delBtn.setAttribute("id", data.val().key);
    delBtn.setAttribute("onclick", "deleteTask(this)");
    var btnText = document.createTextNode("DELETE");
    delBtn.appendChild(btnText);
    btnDiv.appendChild(delBtn);
    liDiv.appendChild(btnDiv);
    taskList.appendChild(liDiv);
})

function addTask() {
    var taskInput = document.getElementById("task-input");

    var database_ref = firebase.database().ref('todo-items')
    var key = database_ref.push().key;
    var todo_items = {
        value: taskInput.value,
        key: key
    }
    database_ref.child(key).set(todo_items)
    taskInput.value = "";
}

function editTask(e) {
    console.log(e.id);
    var updatedValue = prompt("Please update your task", e.parentNode.parentNode.firstChild.firstChild.nodeValue);
    var editTask = {
        value: updatedValue,
        key: e.id
    }

    firebase.database().ref('todo-items').child(e.id).set(editTask);
    e.parentNode.parentNode.firstChild.firstChild.nodeValue = updatedValue;
}

function deleteTask(e) {
    firebase.database().ref('todo-items').child(e.id).remove();
    e.parentNode.parentNode.remove();
}

function deleteAllTask() {
    firebase.database().ref('todo-items').remove();
    taskList.innerHTML = "";
}