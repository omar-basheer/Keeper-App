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
    // console.log(note)
    setNoteList(prevList => {
      return [...prevList, note];
    })
    console.log(noteList)
  }


  return (
    <div>
      <Header />
      <CreateArea 
      onAdd={addNote}
      />
      {noteList.map(noteItem => {
        return <Note 
        title={noteItem.title}
        content = {noteItem.content}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;