import React from "react";

import { useFoodSearch } from "../hooks/searchedFoodRecipes.hook";
import SearchBar from "../features/search-recipes/SearchedFood";
import SearchResult from "../page";

const SearchRoute = () => {
  const { searchedRecipes } = useFoodSearch();
  console.log(searchedRecipes);
  return (
    <>
      <SearchBar />
      {searchedRecipes.length !== 0 && (
        <SearchResult searchedRecipes={searchedRecipes} />
      )}
    </>
  );
};

export default SearchRoute;
