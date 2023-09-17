import React, { useState } from "react";
import NoteLayout from "../../layout/NoteLayout";
import NoteButton from "../../ui/NoteButton";
import AddEditNote from "./AddEditNote";
import List from "../notes/List";
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function NoteSection({
  selectedCategory,
  openAddNote,
  setOpenAddNote,
  openEdit,
  setOpenEdit,
}) {
  const [noteText, setNoteText] = useState(""); // State for the note text
  const [description, setDescription] = useState(""); // State for the description
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query
  const [resetFilter, setResetFilter] = useState(0);

  return (
    <>
      <NoteLayout className="p-3" openEdit={openEdit}>
        {selectedCategory && (
          <>
            <NoteButton
              text="Create Note"
              color="success"
              className="w-52  "
              icon={<AddIcon className="border-l-2 border-gray-500" />}
              onClick={() => {
                setOpenAddNote(true);
                setOpenEdit(null);
                setNoteText("");
                setDescription("");
              }}
            />
            <TextField
              size="small"
              label="Search"
              sx={{ marginLeft: "10px" }}
              value={searchQuery} // Bind the search query value
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
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
                searchQuery={searchQuery} // Pass search query to the List component
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
