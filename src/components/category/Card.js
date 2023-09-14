import React from "react";
import FolderIcon from '@mui/icons-material/Folder';

function Card() {
  return <div className="bg-blue-800 text-white  flex p-1 m-2 rounded-lg items-center ">
    <FolderIcon className="mx-1"/>
    Category (1)
  </div>;
}

export default Card;
