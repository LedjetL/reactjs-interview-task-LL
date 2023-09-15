import React from "react";
import { Divider, TextField } from "@mui/material";

function Card({ note, setOpenEdit }) {
  return (
    <>
      <div
        key={note.id}
        className="mt-2"
        onClick={() =>
          setOpenEdit({
            id: note.id,
            title: note.title,
            description: note.description,
          })
        }
      >
        <h3 className="text-lg font-semibold">{note.title}</h3>
        <p className="text-md">{note.description}</p>
        <Divider />
      </div>
    </>
  );
}

export default Card;
