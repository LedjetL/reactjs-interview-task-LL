import React, { useState } from "react";
import CategoryLayout from "../../layout/CategoryLayout";
import NoteButton from "../../ui/NoteButton";
import NoteModal from "../../ui/NoteModal";
import ModalCategory from "./ModalCategory";
import DoneIcon from "@mui/icons-material/Done";
import List from "../category/List";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebaseApp from "../../config/firebase";

function CategorySection({
  setSelectedCategory,
  selectedCategory,
  setOpenAddNote,
  setOpenEdit,
}) {
  const [open, setOpen] = useState(false);
  const [resetList, setResetList] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const db = getFirestore(firebaseApp);
  const [categoryText, setCategoryText] = useState(""); // State for the category text

  const addCategoryToFirestore = async () => {
    try {
      const docRef = await addDoc(collection(db, "category"), {
        name: categoryText,
        // Add more fields if needed
      });
      console.log("Category added with ID: ", docRef.id);
      // Optionally, you can reset the category text input here:
      setCategoryText("");
      setResetList(resetList + 1);
    } catch (error) {
      console.error("Error adding category: ", error);
    }
  };
  const handleCategoryClick = (id) => {
    setOpenEdit(null);
    setSelectedCategory({ id: id });
    setOpenAddNote(false);
  };
  return (
    <CategoryLayout className="p-3">
      <NoteButton
        onClick={handleOpen}
        text="Create Category"
        icon={<DoneIcon className="border-l-2 border-gray-500"/>}

        color="success"
      />
      <List
        handleCategoryClick={handleCategoryClick}
        selectedCategory={selectedCategory}
        resetList={resetList}
        setSelectedCategory={setSelectedCategory}
        setResetList={setResetList}
        setOpenEdit={setOpenEdit}
      />
      <NoteModal handleClose={handleClose} open={open}>
        <ModalCategory
          handleClose={handleClose}
          addCategoryToFirestore={addCategoryToFirestore}
          setCategoryText={setCategoryText}
          categoryText={categoryText}
        />
      </NoteModal>
    </CategoryLayout>
  );
}

export default CategorySection;
