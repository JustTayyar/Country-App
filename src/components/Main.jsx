import React, { useState } from "react";
import Card from "./Card";
import Title from "./Title";
import RandomCard from "../RandomCrad";

function Main({ cntData, region }) {
  const [show, setShow] = useState(null);
  const [showRandom, setShowRandom] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  function handleToggle() {
    setShowRandom((prev) => !prev);
  }

  function handleOpenSearch() {
    if (!showSearch && showRandom) {
      // Əgər search bağlıdırsa və random açıqdırsa, randomu bağla və search aç
      setShowRandom(false);
      setShowSearch(true);
      setShow("");
    } else if (!showSearch) {
      // Əgər search bağlıdırsa, sadəcə search aç
      setShowSearch(true);
      setShow("");
    } else {
      // Əgər search açıqdırsa, sadəcə search bağla
      setShowSearch(false);
      setShow(null);
    }
  }

  return (
    <>
      {!region && (
        <Title
          setShow={setShow}
          handleToggle={handleToggle}
          handleOpenSearch={handleOpenSearch}
          showRandom={showRandom}
          showSearch={showSearch}
        />
      )}

      {showRandom && <RandomCard cntData={cntData} />}
      <div className="py-7 bg-white text-black dark:bg-gray-800 dark:text-gray-100 flex flex-wrap gap-7 justify-center" >
        {cntData
          .filter((item) => (region ? item.region == region : item))
          .filter((item) =>
            show ? item.name.toLowerCase().includes(show.toLowerCase()) : item
          )
          .map((item, i) => <Card key={i} {...item} />)}
      </div>
    </>
  );
}

export default Main;
