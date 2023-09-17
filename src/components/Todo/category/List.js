import React, { useEffect, useState } from "react";
import Card from "../category/Card";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import app from "../../config/firebase";

function List({ resetList, handleCategoryClick, selectedCategory,setResetList,setSelectedCategory,setOpenEdit }) {
  const db = getFirestore(app);
  const [categories, setCategories] = useState([]);
  async function getCategories() {
    try {
      const categoryCol = collection(db, "category");
      const categorySnapshot = await getDocs(categoryCol);
      const categoryList = categorySnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setCategories(categoryList);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, [resetList]);

  return (
    <div>
      {categories.map((item) => (
        <Card
          handleCategoryClick={handleCategoryClick}
          selectedCategory={selectedCategory}
          id={item.id}
          title={item.name}
          setResetList={setResetList}
          setSelectedCategory={setSelectedCategory}
          setOpenEdit={setOpenEdit}
        />
      ))}
    </div>
  );
}

export default List;
