import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import firebaseApp from "../../config/firebase";

function Card({
  id,
  title,
  handleCategoryClick,
  selectedCategory,
  setResetList,
  setSelectedCategory,
  setOpenEdit,
}) {
  const selected = selectedCategory?.id === id;
  const db = getFirestore(firebaseApp);

  const handleDeleteCategory = async (e) => {
    e.stopPropagation(); // Prevent the click event from propagating

    try {
      const categoryRef = doc(db, "category", id);
      await deleteDoc(categoryRef);

      const notesCollection = collection(db, "notes");
      const notesQuery = query(notesCollection, where("categoryId", "==", id));
      const notesSnapshot = await getDocs(notesQuery);

      notesSnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
      setResetList((prevState) => prevState + 1);
      setSelectedCategory(null);
      setOpenEdit(false);
    } catch (error) {
      console.error("Error deleting category and associated notes:", error);
    }
  };

  return (
    <div
      key={id}
      className={` flex p-1 my-3 rounded-lg items-center cursor-pointer ${
        selected ? "bg-white text-black" : "bg-blue-800  text-white"
      }`}
      onClick={() => handleCategoryClick(id)}
    >
      <div className="flex justify-between w-full">
        <div>
          <FolderIcon className="mx-1" />
          {title}
        </div>
        <DeleteIcon
          onClick={(e) => handleDeleteCategory(e)}
          sx={{ color: "red" }}
        />
      </div>
    </div>
  );
}

export default Card;
