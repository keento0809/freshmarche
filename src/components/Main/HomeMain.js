import React, { useState, useEffect } from "react";
import HomeHero from "../Hero/HomeHero";
import HomeProducts from "../Products/HomeProducts";

const HomeMain = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="allMain">
      <HomeHero value={searchInput} onChange={setSearchInput} />
      <HomeProducts value={searchInput} />
    </div>
  );
};

export default HomeMain;
