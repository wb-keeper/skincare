"use client";
import React, { createContext } from "react";
import { motion } from "framer-motion";
export const CursorContext = createContext();
const CursorContext = ({ children }) => {
  const [cursor, setCursor] = React.useState({
    size: 30,
    background: "#473936",
  });
  const [isHovering, setIsHovering] = React.useState(false);
  return <CursorContext.Provider>{children}</CursorContext.Provider>;
};

export default CursorContext;
