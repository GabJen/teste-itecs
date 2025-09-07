import TaskList from "./TaskList.js";

export default class StorageManager {
    static storeTasks(taskList = TaskList.getTaskList()) {
        if (taskList.length > 0) {
            localStorage.setItem("tasks", JSON.stringify(taskList));
        } else {
            localStorage.setItem("tasks", JSON.stringify([]));
        }
        const storedTasks = JSON.parse(localStorage.getItem("tasks"))
        return storedTasks;
    }

    static getLocalStorage() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (storedTasks) {
            console.log(storedTasks)
            return storedTasks
        } else {
            return [];
        }
    }
}