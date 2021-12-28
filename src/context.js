import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openBurgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        openBurgerMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
