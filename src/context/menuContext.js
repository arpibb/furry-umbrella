import React, { useState, createContext, useCallback } from "react";
import { useWindowSize } from "../lib/useWindowSize";
import { screenSizes } from "../styles/variables";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const isSmallScreen = width <= screenSizes.phone;
  const timeout = isSmallScreen ? 250 : 100;

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, [setIsMenuOpen]);

  const closeMenu = useCallback(() => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, timeout);
  }, [setIsMenuOpen, timeout]);

  return (
    <MenuContext.Provider value={{ isMenuOpen, openMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
