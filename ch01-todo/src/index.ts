import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos = [
    new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)
];

let collection = new TodoCollection("Victor", todos);

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

