import React, { useEffect, useRef } from "react";

function Title({ setShow, handleToggle, handleOpenSearch, showRandom, showSearch,  }) {

  const inpRef = useRef(null);
  useEffect(() => {
    if (showSearch) {
      inpRef.current.focus();
    }
  }, [showSearch]);
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl text-violet-600">
            Welcome to Our Country Information Portal
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Discover detailed information about countries around the world, including their flags, capitals, and regions. Use the search feature to find specific countries or explore by region.
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              className="px-8 py-3 m-2 text-lg font-semibold bg-violet-600 text-gray-50 rounded-3xl cursor-pointer border-2 border-violet-600 hover:bg-white hover:text-violet-600 transition-colors duration-300"
              onClick={handleToggle}
            >
              {showRandom ? "Close Random Country" : "Open Random Country"}
            </button>
            <button
              onClick={handleOpenSearch}
              className="px-8 py-3 m-2 text-lg border dark:text-gray-100 dark:border-gray-300 rounded-3xl cursor-pointer hover:bg-violet-600 hover:text-white transition-colors duration-300"
            >
              {showSearch ? "Close Search" : "Open Search"}
            </button>
            <input
              ref={inpRef}
              onChange={(e) => setShow(e.target.value)}
              type="search"
              placeholder="Search..."
              className={`${showSearch ? "block" : "hidden"} px-8 py-3 m-2 text-lg border rounded-3xl dark:bg-gray-100 dark:text-gray-900 dark:border-gray-900 focus:outline-none  focus:ring-2 focus:ring-violet-600 focus:border-transparent`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Title;
