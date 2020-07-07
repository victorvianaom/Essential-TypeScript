"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
const inquirer = require("inquirer");
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"), new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"), new todoItem_1.TodoItem(4, "Call Joe", true)
];
let collection = new todoCollection_1.TodoCollection("Victor", todos);
let showCompleted = true;
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List` + `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Toggle"] = "Show/Hide Completed";
    Commands["Quit"] = "Quit";
    Commands["Another"] = "Another";
})(Commands || (Commands = {}));
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
        }
        /*if (answers["command"] !== Commands.Quit) {
            promptUser();
        }*/
    });
}
promptUser();
/* The code bellow was used before I install and use `inquirer`
console.clear();
console.log(`${collection.userName}'s Todo List` + `(${collection.getItemCounts().incomplete} items to do)`);
//console.log(`${collection.userName}'s Todo List`);

collection.removeComplete();
collection.getTodoItems(true).forEach(item => item.printDetails());

let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
//console.log(JSON.stringify(todoItem));
todoItem.printDetails();

//collection.addTodo(todoItem); /// this was just an example that throws an error
*/
