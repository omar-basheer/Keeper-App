import React, { useState } from "react"
import { SingleNote, OnAddFunction } from "./Types";

function CreateArea(props:{onAdd: OnAddFunction}) {

    const [note, setNote] = useState<SingleNote>({ title: '', content: '' });

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function submitNote(event: React.MouseEvent<HTMLButtonElement>) {
        const trimmedTitle = note.title.trim();
        const trimmedContent = note.content.trim();
        if (trimmedTitle !== '' && trimmedContent !== ''){
            props.onAdd(note);
        }
        setNote({title: '', content: ''})
        event.preventDefault();
    }

    return (
        <div>
            <form>
                    <input
                        name="title"
                        placeholder="Title"
                        value={note?.title}
                        onChange={handleChange}
                    >
                    </input>
                    <textarea
                        name="content"
                        placeholder="Take a note..."
                        value={note?.content}
                        onChange={handleChange}
                    >

                    </textarea>
                    <button onClick={submitNote}><b>+</b></button>
            </form>
        </div>
    )
}

export default CreateArea