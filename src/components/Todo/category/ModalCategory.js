import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";

function ModalCategory({
  handleClose,
  addCategoryToFirestore,
  categoryText,
  setCategoryText,
}) {
  // Function to add the category to Firestore

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
