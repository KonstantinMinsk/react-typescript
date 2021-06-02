import React from 'react';
import { ColumnContainer, ColumnTitle } from "./styles"
import { AddNewItem } from "./AddNewItem"
import { Card } from "./Card"
import { useAppStore } from './store/useAppStore';
import { observer } from "mobx-react";

interface ColumnProps {
    text: string;
    id: string;
}

export const Column = observer(({ text, id }: ColumnProps) => {
    const {
        appStore: { getTasksByListId, addTask },
    } = useAppStore();
    const tasks = getTasksByListId(id)
    
    return (
        <ColumnContainer>
            <ColumnTitle> {text} </ColumnTitle>
            {tasks.map(task => (
                <Card text={task.text} key={task.id} id={task.id} />
            ))}
            <AddNewItem
                toggleButtonText="+ Add another task"
                onAdd={(text) => addTask(text, id)}
                dark
            />
        </ColumnContainer>
    )
})