import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useFoodSearch } from "../../hooks/searchedFoodRecipes.hook";
import { queryRecipe, clearFetchedRecipes } from "./searchedRecipes.slice";

import SearchBar from "../../components/SearchBar";

const ForkifySearchBar = () => {
  const { searchedRecipes } = useFoodSearch();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmitQuery = (e) => {
    e.preventDefault();
    if (searchedRecipes.length !== 0) dispatch(clearFetchedRecipes());

    dispatch(queryRecipe(query));
  };

  const handleInputQuery = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <>
      <SearchBar
        onSubmit={handleSubmitQuery}
        onChange={handleInputQuery}
        onClick={handleSubmitQuery}
        value={query}
      />
    </>
  );
};

export default ForkifySearchBar;
