import Card from "../notes/Card";
import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore"; // Import Firestore functions
import firebaseApp from "../../config/firebase"; // Import your Firebase configuration here
function List({ setOpenEdit, selectedCategory, openAddNote, resetFilter }) {
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
      const notesData = notesSnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setNotesList(notesData);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchNotes(selectedCategory.id);
    }
  }, [selectedCategory, openAddNote, resetFilter]); // Fetch notes whenever selectedCategory changes

  return (
    <>
      {notesList.map((note) => (
        <Card note={note} setOpenEdit={setOpenEdit} />
      ))}
    </>
  );
}

export default List;
