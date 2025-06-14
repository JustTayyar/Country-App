import React, { useEffect, useState } from "react";

function RandomCard({ cntData }) {
  const [country, setCountry] = useState(null);

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function setRandomCountry() {
    if (cntData.length) {
      const randomCard = getRandom(0, cntData.length - 1);
      setCountry(cntData[randomCard]);
    }
  }

  useEffect(() => {
    setRandomCountry();
    // eslint-disable-next-line
  }, [cntData]);

  if (!country) return null;

  return (
    <div className=" py-5 flex justify-center items-center  bg-white text-black dark:bg-gray-800 dark:text-gray-100 ">
      <div className=" max-w-lg p-4 shadow-md  bg-gray-800 text-black dark:bg-gray-100 dark:text-gray-800 rounded-3xl">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize   text-violet-600 text-lg font-semibold"
            >
              {country?.name}
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={country?.flag}
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              alt={country?.name}
            />
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold text-violet-600">
                {country?.capital}
              </h3>
            </a>
            <p className="leading-snug text-gray-100 dark:text-gray-800">
              {country?.name} is a beautiful country located in {country?.region}.
            </p>
            <div className="text-center ">
              <button
                className="px-4 py-2 mt-2  bg-violet-600 text-white rounded-3xl hover:cursor-pointer"
                onClick={setRandomCountry}
              >
                Random Country
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomCard;
