import StorageManager from "./StorageManager.js";

export default class TaskList {
    static taskArray = [];

    static getTaskList() {
        return this.taskArray;
    }

    static addTask(task) {
        this.taskArray.push(task);
        this.storeTasks(this.taskArray);
    }

    static updateList(list = this.getTaskList()) {
        this.taskArray = StorageManager.storeTasks(list);
        return this.taskArray;
    }

    static deleteTask(task) {
        const filtered = this.taskArray.filter(item => task !== item);
        console.log(task)
        this.updateList(filtered);
    }
}