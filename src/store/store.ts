import { makeObservable, observable, action } from "mobx"
import { nanoid } from "nanoid"
import {
    AppState,
    Task
} from "./model"
import { findItemIndexById } from "../utils/arrayUtils"

const appData: AppState = {
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{ id: "c0", text: "Generate app scaffold" }]
        }, {
            id: "1",
            text: "In Progress",
            tasks: [{ id: "c2", text: "Learn Typescript" }]
        }, {
            id: "2",
            text: "Done",
            tasks: [{ id: "c3", text: "Begin to use static typing" }]
        }
    ]
}

export class AppStore {
    @observable public store: AppState = appData

    constructor() {
        makeObservable(this)
    }

    @action.bound
    public addList(text: string): void {
        const newList = { id: nanoid(), text, tasks: [] }
        this.store.lists.push(newList);
    }

    @action.bound
    public addTask(text: string, listId: string): void {
        const targetListIndex = findItemIndexById(this.store.lists, listId);
        this.store.lists[targetListIndex].tasks.push({ id: nanoid(), text });
    }
    
    @action.bound
    public getTasksByListId(id: string): Task[] {
        const currentList = this.store.lists.find(list => list.id === id)?.tasks || [];
        return currentList;
    }
}