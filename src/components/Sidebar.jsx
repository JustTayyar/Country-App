import React from "react";
import { MdOutlineClose } from "react-icons/md";

function Sidebar({status, setStatus}) {
  return (
    <div className={`h-screen w-[450px] ${status ? 'right-0' : 'right-[-450px]'} bg-[white] fixed top-0 transition-all duration-500 ease-in-out`}>
      <MdOutlineClose size={40} onClick={() => setStatus(false)} />
    </div>
  );
}

export default Sidebar;
