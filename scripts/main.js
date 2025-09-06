import { storeTasks, getLocalStorage } from './storage-manager.js';
import {addTask} from './actions.js'
import { createTaskElement } from './taskCard.js';
import renderTasks from './renderTasks.js'

const addTaskBtn = document.getElementById('addTask-btn');

let tasks = []
window.onload = () => {
    if (getLocalStorage()) {
        tasks = getLocalStorage();
        renderTasks();
    }
}

addTaskBtn.addEventListener('click', () => {
    const titleInp = document.getElementById('title-input');
    const descInp = document.getElementById('desc-input');
    
    const title = titleInp.value;
    const desc = descInp.value;
    const errorContainer = document.getElementById('title-error');
    
    if(!title.trim()) {
        titleInp.classList.add('error');
        errorContainer.classList.add('error');
    }
    else {
        titleInp.classList.remove('error');
        errorContainer.classList.remove('error');
        addTask(title, desc, tasks);
        renderTasks()
    }
    
});