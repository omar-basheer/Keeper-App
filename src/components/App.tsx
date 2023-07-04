import React, { useEffect, useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "../notes"
import { Note as Notetype} from "./Types" 

// function createNote(note: {key: number,title: string,content: string}){
//     return(
//         <Note 
//         key={note.key}
//         title={note.title}
//         content={note.content}
//         />
//     )
// }


function addNote(n: Notetype){

    return(
        <div>
            <h1>{n.title}</h1>
            <p>{n.description}</p>
        </div>
    )
}

function App() {
    const [localNote, setLocalNote] = useState<Array<Notetype>>([]);
    useEffect(() => {
        setLocalNote(notes);
    },
    [])

    function addToLocalNote(m: Notetype ){

    }

    return (
            <div>
                <Header />
                {localNote.map((noteItem, index) => {
                        return(
                            <Note 
                            key={index}
                            title={noteItem.title}
                            content={noteItem.description}
                            />
                        )
                })}

                {/* {addNote} */}
                {/* {notes.map(note =>(
                    <Note 
                    key={note.key}
                    title={note.title}
                    content={note.content}
                    />
                ))} */}
                <Footer />
            </div>

    )
}

export default App