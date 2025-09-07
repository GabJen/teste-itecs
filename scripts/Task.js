import TaskList from "./TaskList.js";

export default class Task {
    constructor(title, desc, id = TaskList.getTaskList().length + 1) {
        this.title = title;
        this.desc = desc;
        this.status = "pendente";
        this.id = id
    }
}