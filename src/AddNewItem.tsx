import { useState } from "react"
import { AddItemButton } from "./styles"
import { NewItemForm } from "./NewItemForm"

export interface AddItemButtonProps {
    dark?: boolean
}

export interface AddNewItemProps extends AddItemButtonProps {
    onAdd: (text: string) => void
    toggleButtonText: string
}

export const AddNewItem = ({ onAdd, toggleButtonText, dark }: AddNewItemProps) => {
    const [showForm, setShowForm] = useState<boolean>(false);

    if (showForm) {
        return (
            <NewItemForm 
                onAdd={(text) => { 
                    setShowForm(false);
                    onAdd(text)
                }} 
            />
        )
    }

    return (
        <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
            {toggleButtonText}
        </AddItemButton>
    )    
}