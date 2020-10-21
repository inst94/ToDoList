const date = require('../generateDate.js');
const Task = require('../models/task');

exports.getWorkPage = (req, res) => {
    let day = date.getDate();
    const workList = Task.fetchWorkTask();
    res.render("worklist.ejs", {date: day, toDoItems:workList});
};

exports.postWorkItem = (req, res) =>{
    const item = new Task(req.body.newTask);
    item.saveTask();
    res.redirect("/work");
};