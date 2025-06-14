import React from "react";

function Burgermenu({ open, regArr, setRegion }) {
  return (
    <div
      className={`lg:hidden transition-all duration-300 mx-auto ${open ? "max-h-110 " : "max-h-0 space-x-3" 
      } overflow-hidden bg-white dark:bg-gray-800 rounded-b-lg  `}
    >
      <ul className="flex flex-col space-y-2  container mx-auto">
        <li
          className="flex"
          onClick={() => setRegion(null)}
        >
          <p className="flex items-center px-4 py-2 rounded cursor-pointer hover:bg-violet-100 dark:hover:bg-gray-700">
            All
          </p>
        </li>
        {regArr.map((item, i) => (
          <li
            className="flex"
            onClick={() => setRegion(item)}
            key={i}
          >
            <p className="flex items-center px-4 py-2 rounded cursor-pointer hover:bg-violet-100 dark:hover:bg-gray-700">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Burgermenu;