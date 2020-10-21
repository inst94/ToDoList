let toDoList = [];
let toDoWorkList = [];

module.exports = class Task{
    constructor(task){
        this.description = task;
    }
    saveTask(){
        toDoList.push(this);
        toDoWorkList.push(this);
    }
    static fetchTasks(){
        return toDoList;
    }
    static fetchWorkTask(){
        return toDoWorkList;
    }
}