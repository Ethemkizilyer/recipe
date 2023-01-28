import { configureStore } from "@reduxjs/toolkit";

// reducers
import ingredientBasketReducer from "./features/ingredient-basket/ingredientBasket.slice";
import pinnedRecipesReducer from "./features/pin-recipes/pinnedRecipes.slice";
import searchedRecipesReducer from "./features/search-recipes/searchedRecipes.slice";
import selectedRecipeReducer from "./features/selected-recipe/selectedRecipe.slice";
import selectedFromBasketReducer from "./features/selected-from-basket/selectedFromBasket.slice";

const rootReducer = {
  ingredientBasket: ingredientBasketReducer,
  pinnedRecipes: pinnedRecipesReducer,
  searchedRecipes: searchedRecipesReducer,
  selectedRecipe: selectedRecipeReducer,
  selectFromBasket: selectedFromBasketReducer,
};

export default configureStore({
  reducer: rootReducer,
});
