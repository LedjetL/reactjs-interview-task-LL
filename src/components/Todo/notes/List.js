import React, { useEffect, useState } from "react";
import Card from "../category/Card";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import app from "../../config/firebase";

function List({ resetList, setSelectedCategory, selectedCategory }) {
  const db = getFirestore(app);
  const [categories, setCategories] = useState([]);
  console.log(categories);
  async function getCategories() {
    try {
      const categoryCol = collection(db, "category");
      const citySnapshot = await getDocs(categoryCol);
      const cityList = citySnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setCategories(cityList);
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
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          id={item.id}
          title={item.name}
        />
      ))}
    </div>
  );
}

export default List;
