import React from "react";

import { useFoodSearch } from "../hooks/searchedFoodRecipes.hook";
import ForkifySearchBar from "../features/search-recipes/SearchedFood";
import ForkifySearchResult from "./SearchResult"

const SearchRoute = () => {
  const { searchedRecipes } = useFoodSearch();
  console.log(searchedRecipes);
  return (
    <>
      <ForkifySearchBar />
      {searchedRecipes.length !== 0 && (
        <ForkifySearchResult searchedRecipes={searchedRecipes} />
      )}
    </>
  );
};

export default SearchRoute;
