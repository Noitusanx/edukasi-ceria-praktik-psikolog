import React, { createContext, useState, useContext } from "react";

const LinkContext = createContext();

export const LinkProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <LinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </LinkContext.Provider>
  );
};

export const useLink = () => useContext(LinkContext);
