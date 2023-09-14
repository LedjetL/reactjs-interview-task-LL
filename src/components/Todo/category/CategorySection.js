import React from "react";
import CategoryLayout from "../../layout/CategoryLayout";
import NoteButton from "../../ui/NoteButton";
import NoteModal from "../../ui/NoteModal";
import ModalCategory from "./ModalCategory";
import DoneIcon from "@mui/icons-material/Done";
import List from "../notes/List";

function CategorySection() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <CategoryLayout className="p-3">
      <NoteButton
        onClick={handleOpen}
        text="Create Category"
        icon={<DoneIcon />}
      />
      <List />
      <NoteModal handleClose={handleClose} open={open}>
        <ModalCategory handleClose={handleClose} />
      </NoteModal>
    </CategoryLayout>
  );
}

export default CategorySection;
