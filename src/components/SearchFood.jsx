import React, { useState } from "react";

import SearchBar from "./SearchBar";

const ForkifySearchBar = () => {
  const handleSubmitQuery = (e) => {
    e.preventDefault();
  };

  const handleInputQuery = (e) => {
    const { value } = e.target;
  };

  return (
    <>
      <SearchBar
        onSubmit={handleSubmitQuery}
        onChange={handleInputQuery}
        onClick={handleSubmitQuery}
      />
    </>
  );
};

export default ForkifySearchBar;
