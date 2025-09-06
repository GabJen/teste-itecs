import { storeTasks, getLocalStorage } from './storage-manager.js';
import {addTask, editTask, delTask, changeStatus} from './actions.js';
import renderTasks from './renderTasks.js';

const tasks = getLocalStorage()

function create(tagName, className) {
    const item = document.createElement(tagName);
    item.classList.add(className);

    return item;
}

export function createTaskElement(task) {
    const litem = create('li', 'task-item')
    const taskCard = create('div', "task-card")

    const status = create('div', "task-status");
    status.setAttribute('role', 'checkbox');
    status.setAttribute('aria-checked', 'false');
    if (task.status === "concluido") {
        status.classList.add('checked')
    } else {
        status.classList.remove('checked')
    }
    
    status.addEventListener('click', (e) => {
        const checked = e.target.classList.contains('checked')
        if(checked) {
            changeStatus(task, !checked);
        }
        else {
            changeStatus(task, !checked);
        }
        renderTasks();
    })

    const taskCont = create('div', "task-content");
    const taskInfo = create('div', 'task-info');
    const title = create('div', 'task-title')
    title.textContent = task.title;
    
    const desc = create('div', 'task-desc')
    desc.textContent = task.desc;
    
    const actions = create('div', 'task-actions');

    const editBtn = create('button', 'editTask-btn');
    editBtn.textContent = 'Editar';

    editBtn.addEventListener('click', () => {
        const popup = document.getElementById('edit-popup');
        const titleEdit = document.getElementById('editTitle-input')
        const descEdit = document.getElementById('editDesc-input')
        const updateBtn = document.getElementById('updateTask-btn')

        popup.classList.add('active');
        titleEdit.value = task.title;
        descEdit.value = task.desc;

        updateBtn.addEventListener('click', () => {
            const title = titleEdit.value;
            const desc = descEdit.value;
            const editError = document.getElementById('editTitle-error');

            if(!title.trim()) {
                titleEdit.classList.add('error');
                editError.classList.add('error');
            }
            else {
                titleEdit.classList.remove('error');
                editError.classList.remove('error');
                editTask(task, title, desc);
                popup.classList.remove('active');
            }
        })
        renderTasks()
    })
    
    const deleteBtn = create('button', 'deleteTask-btn');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.addEventListener('click', () => {
        delTask(task);
        renderTasks(tasks);
    })

    taskInfo.appendChild(title);
    taskInfo.appendChild(desc)
    taskCont.appendChild(taskInfo);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    taskCont.appendChild(actions);
    taskCard.appendChild(status);
    taskCard.appendChild(status);
    taskCard.appendChild(taskCont);
    litem.appendChild(taskCard);

    return litem;
}
