import {editTask, delTask, changeStatus} from './actions.js';
import {renderTasks} from './renderTasks.js';

function create(tagName, className) {
    const item = document.createElement(tagName);
    item.classList.add(className);

    return item;
}

export function createTaskElement(task) {
    const litem = create('li', 'task-item');
    const taskCard = create('div', "task-card");
    const status = create('div', "task-status");
    const taskCont = create('div', "task-content");
    const taskInfo = create('div', 'task-info');
    const title = create('div', 'task-title');
    const desc = create('div', 'task-desc');
    const actions = create('div', 'task-actions');
    const editBtn = create('button', 'editTask-btn');
    const deleteBtn = create('button', 'deleteTask-btn');

    title.textContent = task.title;
    desc.textContent = task.desc;
    editBtn.textContent = 'Editar';
    deleteBtn.textContent = 'Excluir';

    status.setAttribute('role', 'checkbox');
    status.setAttribute('aria-checked', 'false');
    if (task.status === "concluido") {
        status.classList.add('checked')
    } else {
        status.classList.remove('checked')
    }
    
    status.addEventListener('click', (e) => {
        const checked = e.target.classList.contains('checked')
        changeStatus(task, !checked);
        renderTasks();
    })

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
                editError.classList.add('error');
            }
            else {
                editError.classList.remove('error');
                editTask(task, title, desc);
                popup.classList.remove('active');
            }
            renderTasks()
        })
        
    })
    
    deleteBtn.addEventListener('click', () => {
        delTask(task);
        renderTasks();
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
