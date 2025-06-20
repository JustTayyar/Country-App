import React from "react";
import { Link } from "react-router-dom";

function Card({ flag, name, capital, alpha3Code }) {
  return (
    <Link to={`/Details/${alpha3Code}`}>
      <div className="w-64 h-80 rounded-2xl mx-10 shadow-md flex flex-col items-center justify-between text-gray-100 p-4 bg-gray-800 border-2 border-violet-600  dark:border-white">
        <img
          src={flag}
          alt={name}
          className="w-32 h-32 object-cover rounded-md"
        />
        <h2 className="text-lg  text-white font-bold mt-2 text-center">
          {name}
        </h2>
        <p className="text-white dark:text-gray-100 text-center">{capital}</p>
      </div>
    </Link>
  );
}

export default Card;
