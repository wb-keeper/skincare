import React, { useContext } from "react";
import CursorContext from "@/components/CursorContext";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <header className="p-6 xl:pb-[50px] fixed z-20 wf   bg-accent-100 xl:bg-transparent">
      <div className=""></div>
    </header>
  );
};

export default Header;
