import { useState } from "react"
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles"
import { useFocus } from "./utils/useFocus";

interface NewItemFormProps {
    onAdd(text: string): void;
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
    const initialText = "";
    const [text, setText] = useState(initialText);
    const inputRef = useFocus();

    const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && text !==initialText) {
            onAdd(text) 
        }
    }

    // TODO: Why reboot App ?
    // const onAdding = (text: string) => {
    //     if (text !== initialText) {
    //         onAdd(text) 
    //     }
    // }

    return (
        <NewItemFormContainer>
            <NewItemInput
                ref={inputRef}
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyPress={handleAddText}

            />
            <NewItemButton onClick={() => onAdd(text)}>
                Create
            </NewItemButton>
        </NewItemFormContainer>
    )
}