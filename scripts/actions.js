import Task from './Task.js'
import TaskList from './TaskList.js';
import { renderTasks } from './renderTasks.js';

export function addTask(title, desc) {
    const newTask = new Task(title, desc);
    TaskList.addTask(newTask);

    console.log(newTask + 'is Task' + newTask instanceof Task);
}

export function changeStatus(task, checked) { 
    task.status = checked ? "concluido" : "pendente";
    TaskList.updateList()
}

export function delTask(task) {
    TaskList.deleteTask(task);
}

export function editTask(task, newTitle, newDesc) {
    if (task instanceof Task) {
        task.desc = newDesc,
        task.title = newTitle;

        TaskList.updateList();

    } else {
        console.log("ooooooops!")
    }
}

