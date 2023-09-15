import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import CategorySection from "../components/Todo/category/CategorySection";
import NoteSection from "../components/Todo/notes/NoteSection";

function Todo() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openAddNote, setOpenAddNote] = useState(false);
  const [openEdit, setOpenEdit] = useState(false)

  return (
    <MainLayout>
      <CategorySection
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        setOpenAddNote={setOpenAddNote}
        setOpenEdit={setOpenEdit}
      />
      <NoteSection
        selectedCategory={selectedCategory}
        openAddNote={openAddNote}
        setOpenAddNote={setOpenAddNote}
        setOpenEdit={setOpenEdit}
        openEdit={openEdit}
      />
    </MainLayout>
  );
}

export default Todo;
