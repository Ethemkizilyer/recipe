import React from "react";

import { useDispatch } from "react-redux/es/exports";

import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import BreadCrumb from "../components/Bread";

const SelectedRecipeRoute = () => {
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
  };

  const pinRecipeToBasket = (e, { title, image_url }) => {
    e.preventDefault();
  };

  const backToSearchEvent = () => {};

  return (
    <>
      <BreadCrumb path="/search" onClick={backToSearchEvent} />
      {true ? <Spinner /> : <RecipeCard />}
    </>
  );
};

export default SelectedRecipeRoute;
