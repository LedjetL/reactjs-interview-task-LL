import React from "react";
import { Button } from "@mui/material";

function NoteButton(props) {
  return (
    <Button
      onClick={props.onClick}
      className={`w-full h-8 ${props.className}`}
      variant="contained"
    >
      <span className="w-full">{props.text}</span>
      {props.icon}
    </Button>
  );
}

export default NoteButton;
