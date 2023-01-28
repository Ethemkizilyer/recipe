import React from "react";
import { useSelectRecipe } from "../hooks/selectedRecipe.hook";
import { useDispatch } from "react-redux/es/exports";

import { addToBasket } from "../features/ingredient-basket/ingredientBasket.slice";
import { pinRecipe } from "../features/pin-recipes/pinnedRecipes.slice";
import { clearSelectedRecipe } from "../features/selected-recipe/selectedRecipe.slice";

import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import BreadCrumb from "../components/Bread";

const SelectedRecipeRoute = () => {
  const { recipe } = useSelectRecipe();
  const dispatch = useDispatch();

  const addRecipeToBasket = (
    e,
    {
      id,
      title,
      publisher,
      ingredients,
      source_url,
      servings,
      cooking_time,
      image_url,
    }
  ) => {
    e.preventDefault();
    dispatch(
      addToBasket({
        recipe_id: id,
        modal: {
          dishName: title,
          author: publisher,
          ingredients,
          source: source_url,
        },
        card: { title, author: publisher, servings, cooking_time, image_url },
      })
    );
  };

  const pinRecipeToBasket = (e, { title, image_url }) => {
    e.preventDefault();
    dispatch(pinRecipe({ title, image_url }));
    console.log("i was pressed");
  };

  const backToSearchEvent = () => {
    dispatch(clearSelectedRecipe());
  };

  return (
    <>
      <BreadCrumb path="/search" onClick={backToSearchEvent} />
      {recipe?.id === undefined ? (
        <Spinner />
      ) : (
        <RecipeCard
          {...recipe}
          addToBasket={addRecipeToBasket}
          pinRecipe={pinRecipeToBasket}
        />
      )}
    </>
  );
};

export default SelectedRecipeRoute;
