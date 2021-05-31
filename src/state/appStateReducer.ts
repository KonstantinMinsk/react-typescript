import { nanoid } from "nanoid"
import { Action } from './actions'
import { findItemIndexById } from "../utils/arrayUtils"

export interface Task {
    id: string;
    text: string;
}

export interface List {
    id: string;
    text: string;
    tasks: Task[];
}

export interface AppState {
    lists: List[];
}

export const appStateReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case "ADD_TASK": {
            const { text, listId } = action.payload;
            const targetListIndex = findItemIndexById(state.lists, listId);
            const newState = { ...state };
            newState.lists[targetListIndex].tasks.push({ id: nanoid(), text });
            return newState;
        }
        case "ADD_LIST": {
            return {
                lists: [
                    ...state.lists,
                    { id: nanoid(), text: action.payload, tasks: [] }
                ]
            }
        } 
        default: {
            return state
        }
    }
}