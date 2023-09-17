import Card from "../notes/Card";
import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import firebaseApp from "../../config/firebase";

function List({
  setOpenEdit,
  selectedCategory,
  openAddNote,
  resetFilter,
  searchQuery,
}) {
  const [notesList, setNotesList] = useState([]);
  const db = getFirestore(firebaseApp);

  const fetchNotes = async (categoryId) => {
    try {
      const notesCollection = collection(db, "notes");
      let notesQuery;
      if (searchQuery) {
        notesQuery = query(
          notesCollection,
          where("categoryId", "==", categoryId),
          where("title", "==", searchQuery)
        );
      } else {
        notesQuery = query(
          notesCollection,
          where("categoryId", "==", categoryId)
        );
      }

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
      fetchNotes(selectedCategory.id, searchQuery);
    }
  }, [selectedCategory, openAddNote, resetFilter, searchQuery]);

  return (
    <>
      {notesList.map((note) => (
        <Card key={note.id} note={note} setOpenEdit={setOpenEdit} />
      ))}
    </>
  );
}

export default List;
