import { useSelector } from "react-redux";
import { basketIngredients } from "../features/ingredient-basket/ingredientBasket.slice";

export const useDisplayIngredients = () => {
  const basket = useSelector(basketIngredients);

  return {
    basket,
  };
};
