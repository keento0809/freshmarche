import React, { useState, useEffect } from "react";
import HomeHero from "../Hero/HomeHero";
import HomeProducts from "../Products/HomeProducts";

const HomeMain = () => {
  const [searchInput, setSearchInput] = useState("");

  // test
  useEffect(() => {
    console.log("value changing to " + searchInput);
  }, [searchInput]);

  return (
    <div className="allMain">
      <HomeHero value={searchInput} onChange={setSearchInput} />
      <HomeProducts value={searchInput} />
    </div>
  );
};

export default HomeMain;
