import { TodoItem } from "./todoItem";

export class TodoCollection {
    private nextId: number = 1;
    private itemMap = new Map<number, TodoItem>();// <> between squared brackets are the types of the key value pairs in the Map

    constructor(public userName: string, public todoItems: TodoItem[] = []) {
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }

    addTodo(task: string) : number {
        while (this.getTodoById(this.nextId)) {
            this.nextId ++;
        }
        //this.todoItems.push(new TodoItem(this.nextId, task)); /// commented this line to write the bellow one
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
        return this.nextId;
    }

    getTodoById(id: number) : TodoItem {
        //return this.todoItems.find(item => item.id === id);//commented this to add the bellow
        return this.itemMap.get(id);
    }

    markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}