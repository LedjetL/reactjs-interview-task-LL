import React from "react";

function NoteLayout(props) {
  return (
    <div
      className={`col-span-4 bg-white rounded-lg m-2 ml-0 ${props.className}`}
    >
      {props.children}
    </div>
  );
}

export default NoteLayout;
