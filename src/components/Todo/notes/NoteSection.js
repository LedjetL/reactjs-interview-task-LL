import React, { useState, useEffect } from "react";
import NoteLayout from "../../layout/NoteLayout";
import NoteButton from "../../ui/NoteButton";
import { Divider, TextField } from "@mui/material";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore"; // Import Firestore functions
import firebaseApp from "../../config/firebase"; // Import your Firebase configuration here

function NoteSection({ selectedCategory }) {
  const [noteText, setNoteText] = useState(""); // State for the note text
  const [description, setDescription] = useState(""); // State for the description
  const [openAddNote, setOpenAddNote] = useState(false);
  const [notesList, setNotesList] = useState([]); // State for the list of notes
  const db = getFirestore(firebaseApp);

  // Function to fetch notes based on a specific category ID
  const fetchNotes = async (categoryId) => {
    try {
      const notesCollection = collection(db, "notes");
      const notesQuery = query(
        notesCollection,
        where("categoryId", "==", categoryId)
      );
      const notesSnapshot = await getDocs(notesQuery);
      const notesData = notesSnapshot.docs.map((doc) => doc.data());
      setNotesList(notesData);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchNotes(selectedCategory.id);
    }
  }, [selectedCategory, openAddNote]); // Fetch notes whenever selectedCategory changes

  const addNoteToFirestore = async () => {
    try {
      const noteData = {
        title: noteText,
        description: description,
        categoryId: selectedCategory?.id,
      };

      await addDoc(collection(db, "notes"), noteData);
      setNoteText("");
      setDescription("");
      setOpenAddNote(false);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  return (
    <NoteLayout className="p-3">
      {selectedCategory && (
        <>
          <NoteButton
            text="Create Note"
            color="success"
            onClick={() => setOpenAddNote(true)}
          />
          {openAddNote ? (
            <>
              <TextField
                label="Add a note"
                variant="standard"
                size="small"
                fullWidth
                sx={{ width: "100%" }}
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
              />
              <h6>Description</h6>
              <textarea
                className="w-full h-[75%] border"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="w-full flex justify-end">
                <NoteButton
                  text="Save Changes"
                  color="success"
                  onClick={addNoteToFirestore}
                />
              </div>
            </>
          ) : (
            <>
              {notesList.map((note) => (
                <div key={note.id} className="mt-2">
                  <h3 className="text-lg font-semibold">{note.title}</h3>
                  <p className="text-md">{note.description}</p>
                  <Divider />
                </div>
              ))}
            </>
          )}
        </>
      )}
    </NoteLayout>
  );
}

export default NoteSection;
