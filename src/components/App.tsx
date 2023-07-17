import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";
import { SingleNote } from "./Types";

function App() {

  const [noteList, setNoteList] = useState<SingleNote[]>([]);

  function addNote(note: SingleNote){
    setNoteList(prevList => {
      return [...prevList, note];
    })
    console.log(noteList)
  }

  function deleteNote(id: number){
    setNoteList(prevList => {
      return prevList.filter((noteItem, index) => {
        return index !== id;
      });
    })
  }

  function editNote(id: number){
    
  }

  return (
    <div>
      <Header />
      <CreateArea 
      onAdd={addNote}
      />
      {noteList.map((noteItem, index) => {
        return <Note 
        key={index}
        id={index}
        title={noteItem.title}
        content = {noteItem.content}
        onDelete={deleteNote}
        onEdit={editNote}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;