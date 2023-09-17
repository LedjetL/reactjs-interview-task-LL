import React from "react";

function NoteLayout(props) {
  return (
    <div
      className={`${
        props.openEdit
          ? "col-span-8 md:col-span-3  "
          : "col-span-8 md:col-span-6 "
      } bg-white rounded-lg m-2 ml-0 ${props.className}`}
    >
      {props.children}
    </div>
  );
}

export default NoteLayout;
