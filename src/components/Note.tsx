import React from "react";
import { DeleteFunction } from "./Types";

function Note(props: {onDelete: DeleteFunction, title: string, content:string, id: number}) {

  function handleClick(event: React.MouseEvent<HTMLButtonElement>){
    props.onDelete(props.id)
  }

  return (
    <div className="note">
      <h1><b>{props.title}</b></h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>delete</button>
    </div>
    
  );
}

export default Note;