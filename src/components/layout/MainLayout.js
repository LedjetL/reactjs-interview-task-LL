import React from "react";

function MainLayout(props) {
  return (
    <div className="w-full h-[93vh] grid grid-cols-6">{props.children}</div>
  );
}

export default MainLayout;
