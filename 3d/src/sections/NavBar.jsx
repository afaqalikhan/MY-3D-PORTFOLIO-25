import React, { useState } from "react";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-blue-950">
      <div className="">
        <div className="flex justify-between items-center py-2 px-2">
          <a
            href="/"
            className="text-xl font-bold text-neutral-400 hover:text-white transition-colors"
          >
            Afaq Ali Khan
          </a>
          {/* toggle button */}
          <button className="cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
            <img src={ isOpen ? closeIcon : menuIcon } alt="" className="w-6 h-6" />
          </button>
        </div>
      </div>

      { isOpen && <div>
        khan
      </div> }

    </div>
  );
};

export default NavBar;
