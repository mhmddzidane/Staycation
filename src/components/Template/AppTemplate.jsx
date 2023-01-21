import React from "react";

const AppTemplate = ({ children }) => {
  return (
    <main className="px-2 md:px-[50px] lg:px-[150px] min-h-screen ">
      {children}
    </main>
  );
};

export default AppTemplate;
