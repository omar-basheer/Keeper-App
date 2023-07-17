import React, { useEffect, useState } from "react";
import { DeleteFunction, EditFunction } from "./Types";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Note(props: {
  onDelete: DeleteFunction,
  onEdit: EditFunction,
  title: string,
  content: string,
  id: number,
  key: number
}) {

  function handleDelete(event: React.MouseEvent<HTMLButtonElement>) {
    props.onDelete(props.id)
  }

  function handleEdit(event: React.MouseEvent<HTMLButtonElement>) {
    console.log('props.id:' + props.id)
    props.onEdit(props.id)
  }

  return (
    <div className="note">
      <h1><b>{props.title}</b></h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
      <button onClick={handleEdit}>
        <EditIcon />
      </button>
    </div>

  );
}

export default Note;