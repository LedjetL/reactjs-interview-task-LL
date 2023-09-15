import React from "react";
import FolderIcon from "@mui/icons-material/Folder";

function Card({ id, title, handleCategoryClick, selectedCategory }) {
  const selected = selectedCategory?.id === id;
  return (
    <div
      key={id}
      className={`bg-blue-800 text-white flex p-1 my-3 rounded-lg items-center ${
        selected ? "bg-white text-black" : ""
      }`}
      onClick={() => handleCategoryClick(id)}
    >
      <FolderIcon className="mx-1" />
      {title}
    </div>
  );
}

export default Card;
