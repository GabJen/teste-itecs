export function storeTasks(taskList) {
    if(taskList.length > 0) {
        localStorage.setItem("tasks", JSON.stringify(taskList));    
    } else {
        localStorage.setItem("tasks", JSON.stringify([]));
    }
}

export function getLocalStorage() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    return storedTasks;
}