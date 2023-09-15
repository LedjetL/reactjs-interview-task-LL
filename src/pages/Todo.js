import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import CategorySection from "../components/Todo/category/CategorySection";
import NoteSection from "../components/Todo/notes/NoteSection";

function Todo() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <MainLayout>
      <CategorySection
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <NoteSection selectedCategory={selectedCategory} />
    </MainLayout>
  );
}

export default Todo;
