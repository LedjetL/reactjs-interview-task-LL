import React from 'react'
import { Button, TextField } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";

function ModalCategory() {
  return (
    <div>
        <TextField
        
        
    id="filled-basic"
    label="Filled"
    variant="filled"
  />
  <Button
    color="success"
    sx={{ borderRadius: "25%" }}
    variant="contained"
  >
    <DoneIcon />
  </Button>
  <Button color="error" sx={{ borderRadius: "25%" }} variant="contained">
    <ClearIcon />
  </Button> 
  </div>
  )
}

export default ModalCategory