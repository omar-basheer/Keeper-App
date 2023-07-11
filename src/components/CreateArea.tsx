import React, { useState } from "react"
import { SingleNote, OnAddFunction } from "./Types";

function CreateArea(props:{onAdd: OnAddFunction}) {

    const [note, setNote] = useState<SingleNote>({ id: 0, title: '', content: '' });

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
        props.onAdd(note);
        event.preventDefault();
        // setNoteList(prevList => {
        //     return{
        //             ...prevList,
        //             note
        //     }
        // })
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