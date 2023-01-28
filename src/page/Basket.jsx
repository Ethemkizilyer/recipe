import React from "react";

import { useSelectRecipe } from "../hooks/selectedRecipe.hook";
import { useDisplayIngredients } from "../hooks/ingredientBasket.hook";
import { usePinnedRecipes } from "../hooks/pinnedRecipes.hook";

import BreadCrumb from "../components/Bread";
import BasketComponent from "../components/Basket";

const Basket = () => {
  const { basket } = useDisplayIngredients();
  const { recipe } = useSelectRecipe();
  const { pinnedRecipes } = usePinnedRecipes();

  return (
    <>
      <BreadCrumb
        path={recipe?.id === undefined ? `/search` : `/search/${recipe.id}`}
      />
      <BasketComponent basket={basket} pinned={pinnedRecipes} />
    </>
  );
};

export default Basket;
