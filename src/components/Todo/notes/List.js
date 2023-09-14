import React, { useEffect, useState } from "react";
import Card from "../category/Card";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import app from "../../config/firebase";

function List({ resetList }) {
  const db = getFirestore(app);
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    try {
      const categoryCol = collection(db, "category");
      const citySnapshot = await getDocs(categoryCol);
      console.log(citySnapshot);
      const cityList = citySnapshot.docs.map((doc) => doc.data());
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
        <Card key={item.name} title={item.name} />
      ))}
    </div>
  );
}

export default List;
