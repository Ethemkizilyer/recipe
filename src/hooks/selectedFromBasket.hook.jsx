import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useDisplayIngredients } from "./ingredientBasket.hook";


import { removeFromBasket } from "../features/ingredient-basket/ingredientBasket.slice";

import { loadSelectedModal } from "../features/selected-from-basket/selectedFromBasket.slice"
import { selected } from "../features/selected-from-basket/selectedFromBasket.slice";


export const useShowModal = () => {
  const { basket } = useDisplayIngredients();
  const { basket_id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      loadSelectedModal({
        selected_dish: basket.filter(
          ({ recipe_id }) => recipe_id === basket_id
        )[0],
      })
    );
  }, [basket_id, basket, dispatch]);

  const remove = (e) => {
    e.preventDefault();
    dispatch(removeFromBasket(basket_id));
    navigate("/basket");
  };

  return {
    selectedDish: useSelector(selected),
    remove_recipe: remove,
  };
};
