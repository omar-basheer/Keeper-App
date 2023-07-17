import React, { useState } from "react"
import { SingleNote, OnAddFunction } from "./Types";
import AddCircleOutlineIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from "@mui/material";

function CreateArea(props: { onAdd: OnAddFunction }) {
    const [note, setNote] = useState<SingleNote>({ title: '', content: '' });
    const [noteIsExpanded, setNoteExpanded] = useState(false);

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function expandNote(event: React.MouseEvent<HTMLTextAreaElement>) {
        setNoteExpanded(true)
    }

    function submitNote(event: React.MouseEvent<HTMLButtonElement>) {
        const trimmedTitle = note.title.trim();
        const trimmedContent = note.content.trim();
        if (trimmedTitle !== '' || trimmedContent !== '') {
            props.onAdd(note);
        }
        setNote({ title: '', content: '' })
        event.preventDefault();
    }


    return (
        <div>
            <form className="create-note">
                {noteIsExpanded ? <input
                    name="title"
                    placeholder="Title"
                    value={note?.title}
                    onChange={handleChange}
                >
                </input> : null}
                <textarea
                    name="content"
                    rows={noteIsExpanded ? 3 : 1}
                    placeholder="Take a note..."
                    value={note?.content}
                    onClick={expandNote}
                    onChange={handleChange}
                >

                </textarea>
                <Zoom in={noteIsExpanded}>
                    <Fab onClick={submitNote}>
                        <AddCircleOutlineIcon />
                    </Fab>
                </Zoom>

            </form>
        </div>
    )
}

export default CreateArea