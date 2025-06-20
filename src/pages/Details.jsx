import React, { use } from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";

function Details({cntData}) {

  const {alpha3Code} = useParams();
    const cntObj = cntData.find((item) => item.alpha3Code === alpha3Code);
     console.log("Axtarılan alpha3Code:", alpha3Code);
  console.log("İlk ölkə datasına baxın:", cntData[0]);
    if (!cntObj) {
        return <Error/>;
    }
  return (
    <div className="container mx-auto border-2 border-violet-600 dark:border-white dark:bg-white bg-gray-800 rounded-2xl">
      <section className="container">
        <div className="container rounded-2xl max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 dark:bg-white">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <img
              src={cntObj?.flag}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5 dark:bg-white">
              <h3 className="text-2xl font-semibold sm:text-4xl dark:text-violet-800  text-white">
               {cntObj?.name}
              </h3>
              <span className=" dark:text-black block mt-8  text-2xl  text-white ">
                Capital:  {cntObj?.capital}
              </span>
              <p className="mt-20 text-2xl dark:text-black text-white">
                Subregion: {cntObj?.subregion}
              </p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Details;
