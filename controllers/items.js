const date = require('../generateDate.js');
const Task = require('../models/task');
//let toDoList = [];

exports.getMainPage = (req, res) => {
    let weekday = date.getDate();
    const itemList = Task.fetchTasks();
    /*let weekday = date.getWeekDay();
    console.log(day);*/
    res.render("index.ejs", {date: weekday, toDoItems:itemList});
};

exports.postNewItem = (req, res) =>{
    const item = new Task(req.body.newTask);
    item.saveTask();
    /*let newTask = req.body.newTask;
    toDoList.push(newTask);*/
    res.redirect("/");
};