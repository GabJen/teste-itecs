import {addTask} from './actions.js'
import {renderTasks} from './renderTasks.js'
import TaskList from './TaskList.js'
import StorageManager from './StorageManager.js';

const addTaskBtn = document.getElementById('addTask-btn');
window.onload = () => {
    TaskList.updateList(StorageManager.getLocalStorage())
    renderTasks()
};

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
        addTask(title, desc);
        renderTasks()
    }
    titleInp.value = '';
    descInp.value = '';
    
});