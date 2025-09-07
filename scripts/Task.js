import StorageManager from "./StorageManager.js";

export default class Task {
    constructor(title, desc, id = StorageManager.getTaskList().length + 1) {
        this.title = title;
        this.desc = desc;
        this.status = "pendente";
        this.id = id
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }

    setDesc(newDesc) {
        this.desc = newDesc;
    }

    setStatus(checked) {
        this.status = checked ? "concluido" : "pendente";
    }

    //Tasnform simple task objects aray into an array of Task's heritages
    static toTaskTypeList(arr) {
        const list = arr.map(obj => {
            new Task (obj.title, obj.desc, obj.id)
        });
        return list;
    }
}