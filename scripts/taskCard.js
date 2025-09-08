import {editTask, delTask, changeStatus} from './actions.js';
import {renderTasks} from './renderTasks.js';

function create(tagName, className) {
    const item = document.createElement(tagName);

    // In cases of more than one className, they're separeted by a space
    className.split(" ").forEach(name => item.classList.add(name));

    return item;
}

export function createTaskElement(task) {
    // CREATE ELEMENTS
    const litem = create('li', 'task-item');
    const taskCard = create('div', "task-card");
    const status = create('div', "task-status");
    const taskCont = create('div', "task-content");
    const taskInfo = create('div', 'task-info');
    const title = create('div', 'task-title');
    const desc = create('div', 'task-desc');
    const actions = create('div', 'task-actions');
    const editBtn = create('button', 'editTask-btn');
    const deleteBtn = create('button', 'deleteTask-btn dangerZone-btn');

    // ASSIGN TEZT CONTENT
    title.textContent = task.title;
    desc.textContent = task.desc;
    editBtn.textContent = 'Editar';
    deleteBtn.textContent = 'Excluir';

    // CHANGE STATUS FEATURE
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

    // EDIT TASK FEATURE
    editBtn.addEventListener('click', () => {
        const popup = document.getElementById('edit-popup');
        const titleEdit = document.getElementById('editTitle-input');
        const descEdit = document.getElementById('editDesc-input');
        const updateBtn = document.getElementById('updateTask-btn');
        const closeBtn = document.getElementById('close-btn');

        popup.classList.add('active');
        document.body.classList.add('disabled')
        titleEdit.value = task.title;
        descEdit.value = task.desc;

        // CLOSE FORM
        function close() {
            popup.classList.remove('active');
            document.body.classList.remove('disabled');
        }

        closeBtn.addEventListener('click', () => {
            close();
        })

        // SAVE UPDATE
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
                close();
            }
            renderTasks()
        })
        
    })
    
    // DELETE TASK FEATURE
    deleteBtn.addEventListener('click', () => {
        delTask(task);
        renderTasks();
    })

    // ASSIGN ELEMENTS TO ITS PARENTS
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
