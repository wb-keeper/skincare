import React, { useContext } from "react";
import CursorContext from "@/components/CursorContext";

const Header = () => {
  const { mouse } = useContext(CursorContext);
  return <header className="p-24"></header>;
};

export default Header;
