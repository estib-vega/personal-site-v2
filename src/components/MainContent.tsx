import React from "react";

interface MainContentProps {
 children: React.ReactNode;
}

const MainContent = (props: MainContentProps): JSX.Element => {
  return (
    <div className="bg-white box-border rounded-xl m-2 overflow-scroll text-gray-800 shadow-md shadow-blue-600 sm:w-full h-full sm:h-auto">
      {props.children}
    </div>
  );
}

export default MainContent;