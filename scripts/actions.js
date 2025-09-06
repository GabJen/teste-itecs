import Task from './Task.js'
import { storeTasks, getLocalStorage } from './storage-manager.js';

const tasks = getLocalStorage();

export function addTask(title, desc, list) {
    const newTask = new Task(title, desc, list.length + 1);
    list.push(newTask);
    storeTasks(list);

    console.log(list);
    console.log(localStorage);    
}

export function changeStatus(task, checked) {
    if (checked) {
        task.status = "concluido"
    } else if (!checked) {
        task.status = "pendente";
    }

    storeTasks(tasks)
}

export function delTask(task) {
    const filteredList = tasks.filter(item => item !== task);
    storeTasks(filteredList);

    console.log(tasks);
    console.log(localStorage);
}

export function editTask(task, newTitle, newDesc) {
    task.title = newTitle;
    task.desc = newDesc;

    storeTasks(tasks);
}