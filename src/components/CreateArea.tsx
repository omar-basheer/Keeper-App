import React, { useEffect, useState } from "react"
import { SingleNote, OnAddFunction, UpdateNoteFunction } from "./Types";
import AddCircleOutlineIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from "@mui/material";


function CreateArea(props: { 
    onAdd: OnAddFunction 
    onUpdate: UpdateNoteFunction
    noteToEdit?: SingleNote | null 
    noteList: SingleNote[]
}) {

    const [note, setNote] = useState<SingleNote>({ title: '', content: '', id: props.noteList.length});
    const [noteIsExpanded, setNoteExpanded] = useState(false);
    useEffect(( )=> {
        if(props.noteToEdit){
            setNote({
                id: props.noteToEdit.id,
                title: props.noteToEdit.title,
                content: props.noteToEdit.content
            })
        }
        // console.log('current notelist: '+ props.noteList)
    }, [props.noteToEdit])

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
        debugger
        const trimmedTitle = note.title.trim();
        const trimmedContent = note.content.trim();
        if (trimmedTitle !== '' || trimmedContent !== '') {
            if (props.noteToEdit){
                const updateNote = {...props.noteToEdit, title: note.title, content: note.content}
                props.onUpdate(updateNote)
            }else{
                props.onAdd(note);
            }
        }
        setNote({ title: '', content: '', id: props.noteList.length})
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