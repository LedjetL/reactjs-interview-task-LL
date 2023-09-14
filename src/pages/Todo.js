import React from "react";
import MainLayout from "../components/layout/MainLayout";
import CategorySection from "../components/Todo/category/CategorySection";
import NoteSection from "../components/Todo/notes/NoteSection";

function Todo() {
  return (
    <MainLayout>
      <CategorySection />
      <NoteSection />
    </MainLayout>
  );
}

export default Todo;
