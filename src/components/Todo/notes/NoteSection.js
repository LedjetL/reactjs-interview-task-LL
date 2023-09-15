import React, { useState } from "react";
import NoteLayout from "../../layout/NoteLayout";
import NoteButton from "../../ui/NoteButton";
import AddEditNote from "./AddEditNote";
import List from "../notes/List";

function NoteSection({
  selectedCategory,
  openAddNote,
  setOpenAddNote,
  openEdit,
  setOpenEdit,
}) {
  const [noteText, setNoteText] = useState(""); // State for the note text
  const [description, setDescription] = useState(""); // State for the description
  const [resetFilter,setResetFilter] = useState(0)
  return (
    <>
      <NoteLayout className="p-3" openEdit={openEdit}>
        {selectedCategory && (
          <>
            <NoteButton
              text="Create Note"
              color="success"
              className="w-52"
              onClick={() => {
                setOpenAddNote(true);
                setOpenEdit(null);
                setNoteText("");
                setDescription("");
              }}
            />
            {openAddNote ? (
              <AddEditNote
                noteText={noteText}
                setNoteText={setNoteText}
                description={description}
                setDescription={setDescription}
                selectedCategory={selectedCategory}
                setOpenAddNote={setOpenAddNote}
                setOpenEdit={setOpenEdit}
              />
            ) : (
              <List
                setOpenEdit={setOpenEdit}
                selectedCategory={selectedCategory}
                openAddNote={openAddNote}
                resetFilter={resetFilter}
              />
            )}
          </>
        )}
      </NoteLayout>
      {openEdit && (
        <NoteLayout openEdit={openEdit} className="p-3">
          <AddEditNote
            noteText={noteText}
            setNoteText={setNoteText}
            description={description}
            setDescription={setDescription}
            selectedCategory={selectedCategory}
            setOpenAddNote={setOpenAddNote}
            openEdit={openEdit}
            setOpenEdit={setOpenEdit}
            setResetFilter={setResetFilter}
          />
        </NoteLayout>
      )}
    </>
  );
}

export default NoteSection;
