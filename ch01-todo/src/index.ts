import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from 'inquirer';

let todos = [
    new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)
];

let collection = new TodoCollection("Victor", todos);
let showCompleted = true;

function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List` + `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}

enum Commands {
    Toggle = "Show/Hide Completed",
    Quit = "Quit",
    Another = "Another"
}

function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
        //badProperty: true //this was just for testing if the Inquirer.js Typed Declarations were working... and it is...
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
    })
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
