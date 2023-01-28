import { useSelector } from "react-redux";
import { searchRecipes } from "../features/search-recipes/searchedRecipes.slice";

export const useFoodSearch = () => {
  const searchedRecipes = useSelector(searchRecipes);
  return {
    searchedRecipes,
  };
};
