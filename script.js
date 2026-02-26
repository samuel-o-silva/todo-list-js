const input = document.getElementById("taskInput");
const button = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", addTask);

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Digite uma tarefa válida!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    list.appendChild(li);

    input.value = "";
}
