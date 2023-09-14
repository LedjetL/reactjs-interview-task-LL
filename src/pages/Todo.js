import React from "react";
import { Button, TextField } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import MainLayout from "../components/layout/MainLayout";
import CategoryLayout from "../components/layout/CategoryLayout";
import NoteLayout from "../components/layout/NoteLayout";
import Card from "../components/category/Card";
import NoteButton from "../components/ui/NoteButton";
import NoteModal from "../components/ui/NoteModal";
import ModalCategory from "../components/category/ModalCategory";

function Todo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <MainLayout>
        <CategoryLayout>
          <NoteButton
            onClick={handleOpen}
            text="create category"
            icon={<DoneIcon />}
            className="m-10"
          />
          <Card />
        </CategoryLayout>
        <NoteLayout></NoteLayout>
      </MainLayout>
      <NoteModal handleClose={handleClose} open={open}>
        <ModalCategory />
      </NoteModal>
    </>
  );
}

export default Todo;
