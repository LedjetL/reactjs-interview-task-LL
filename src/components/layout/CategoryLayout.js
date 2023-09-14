import React from "react";

function CategoryLayout({ className, children }) {
  return (
    <div className={`col-span-2 bg-white m-2 rounded-lg ${className}`}>
      {children}
    </div>
  );
}

export default CategoryLayout;
