import { TextField } from "@mui/material";
import React, { useEffect } from "react";
import NoteButton from "../../ui/NoteButton";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import firebaseApp from "../../config/firebase";

function AddEditNote({
  noteText,
  setNoteText,
  description,
  setDescription,
  selectedCategory,
  setOpenAddNote,
  openEdit = {},
  setOpenEdit,
  setResetFilter = () => {},
}) {
  const db = getFirestore(firebaseApp);

  const saveNote = async () => {
    try {
      const noteData = {
        title: noteText,
        description: description,
        categoryId: selectedCategory?.id,
      };

      if (openEdit?.id) {
        const noteRef = doc(db, "notes", openEdit.id);
        await updateDoc(noteRef, noteData);
      } else {
        await addDoc(collection(db, "notes"), noteData);
      }
      setOpenEdit(null);
      setNoteText("");
      setDescription("");
      setOpenAddNote(false);
      setResetFilter((prevState) => prevState + 1);
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  const deleteNote = async () => {
    try {
      const noteRef = doc(db, "notes", openEdit.id);
      await deleteDoc(noteRef);
      setOpenAddNote(false);
      setOpenEdit(null);
      setResetFilter((prevState) => prevState + 1);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  useEffect(() => {
    if (openEdit?.id) {
      setNoteText(openEdit.title);
      setDescription(openEdit.description);
    } else {
      setNoteText("");
      setDescription("");
    }
  }, [openEdit?.id]);

  return (
    <>
      <TextField
        label={openEdit?.id ? "Edit a note" : "Add a note"}
        variant="standard"
        size="small"
        fullWidth
        sx={{ width: "100%" }}
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <h6>Description</h6>
      <textarea
        className="w-full h-[72%] border"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="w-full flex justify-between">
        {openEdit?.id && (
          <div className="w-full flex justify-start">
            <NoteButton
              text="Delete"
              color="error"
              className="w-32"
              onClick={deleteNote}
            />
          </div>
        )}
        <div className="w-full flex justify-end">
          <NoteButton
            text={openEdit?.id ? "Save" : "Create"}
            color="success"
            className="w-32"
            onClick={saveNote}
          />
        </div>
      </div>
    </>
  );
}

export default AddEditNote;
