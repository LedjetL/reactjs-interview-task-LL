import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebaseApp from "../../config/firebase"; // Import your Firebase configuration here

function ModalCategory({ handleClose }) {
  const [categoryText, setCategoryText] = useState(""); // State for the category text

  const db = getFirestore(firebaseApp);

  // Function to add the category to Firestore
  const addCategoryToFirestore = async () => {
    try {
      const docRef = await addDoc(collection(db, "category"), {
        name: categoryText,
        // Add more fields if needed
      });
      console.log("Category added with ID: ", docRef.id);
      // Optionally, you can reset the category text input here:
      setCategoryText("");
    } catch (error) {
      console.error("Error adding category: ", error);
    }
  };

  return (
    <>
      <TextField
        id="filled-basic"
        label="Add a category"
        variant="filled"
        value={categoryText} // Bind the value of the TextField to the state
        onChange={(e) => setCategoryText(e.target.value)} // Update the state when the text changes
      />
      <Button
        color="success"
        sx={{ borderRadius: "15%", height: "55px", marginLeft: "10px" }}
        variant="contained"
        onClick={addCategoryToFirestore} // Call the function when the button is clicked
      >
        <DoneIcon />
      </Button>
      <Button
        color="error"
        onClick={handleClose}
        sx={{ borderRadius: "15%", height: "55px", marginLeft: "10px" }}
        variant="contained"
      >
        <ClearIcon />
      </Button>
    </>
  );
}

export default ModalCategory;
