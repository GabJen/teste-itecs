import { createTaskElement } from "./taskCard.js";
import TaskList from "./TaskList.js";
import Task from "./Task.js";

export function renderTasks() {
    let tasksArray = TaskList.getTaskList();
    console.log(tasksArray)
    const todosection = document.getElementById('tasktodo-list');
    const doneSection = document.getElementById('taskdone-list');

    todosection.innerHTML = '';
    doneSection.innerHTML = '';

    tasksArray.forEach(task => {
        console.log(task)
        if (task.status === "pendente") {
            todosection.appendChild(createTaskElement(task));
        } 
        else if(task.status === "concluido") {
            doneSection.appendChild(createTaskElement(task));
        }
    });

    if(!todosection.innerHTML) {
        todosection.innerHTML = todosection.innerHTML === '' ? '<li>Não há tarefas pendentes</li>' : todosection.innerHTML;
    } else if(!doneSection.innerHTML) {
        doneSection.innerHTML = doneSection.innerHTML === '' ? '<li>Não há tarefas concluidas</li>' : doneSection.innerHTML;
    }
}