import React, { createContext, useContext, useState } from "react";

const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
  const [dropdownItems, setDropdownItems] = useState([]);

  const addDropdownItem = (items) => {
    setDropdownItems(items);
  };

  const value = {
    dropdownItems,
    addDropdownItem,
  };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      "useDropdownContext must be used within a DropdownProvider"
    );
  }
  return context;
};
