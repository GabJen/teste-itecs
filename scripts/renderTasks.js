import { getLocalStorage } from "./storage-manager.js";
import { createTaskElement } from "./taskCard.js";

export default function renderTasks() {
    const tasks = getLocalStorage();
    const todosection = document.getElementById('tasktodo-list');
    const doneSection = document.getElementById('taskdone-list');

    todosection.innerHTML = '';
    doneSection.innerHTML = '';

    tasks.forEach(task => {
        if (task.status === "pendente") {
            todosection.appendChild(createTaskElement(task));
        } 
        else if(task.status === "concluido") {
            doneSection.appendChild(createTaskElement(task));
        } 
    });

    if(!todosection.innerHTML) {
        todosection.innerHTML = '<li>Não há tarefas pendentes</li>'
    } else if(!doneSection.innerHTML) {
        doneSection.innerHTML = '<li>Não há tarefas concluídas</li>'
    }
}