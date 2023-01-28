import React from "react";
import styled from "styled-components";

import BasketModalComponent from "./BasketModal";
import BasketCardComponent from "./BasketCard";
import PinnedRecipeComponent from "./RecipeCard";

const BasketContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
`;

const BasketContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 85%;
`;

const BasketContentFlex = styled.div`
  display: flex;
  gap: 20px;

  width: 80%;
`;

const BasketContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 80%;
  margin: 0 0 30px 0;

  gap: 16px;
`;

const Baskete = styled.div`
  width: 100%;
  margin: 30px 0 15px 0;
  border-bottom: 1px solid var(--primary-color);
`;

const BasketHeader = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  color: var(--primary-color);
`;

const BasketMessageContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
`;

const BasketMessage = styled.h4`
  font-size: 1.25rem;
  font-family: "Raleway", sans-serif;
`;

const BasketComponent = () => {
  return (
    <>
      {" "}
      <BasketContainer>
        {1 !== 0 && (
          <BasketContent>
            <Baskete>
              <BasketHeader>Pinned Recipes</BasketHeader>
            </Baskete>
            <BasketContentFlex>
              
            </BasketContentFlex>
          </BasketContent>
        )}
        <BasketContent>
          <Baskete>
            <BasketHeader>Basket</BasketHeader>
          </Baskete>
          {1 !== 0 ? (
            <BasketContentGrid>
              
            </BasketContentGrid>
          ) : (
            <BasketMessageContainer>
              <BasketMessage>
                Your basket is looking dull, start searching for recipes and add
                them here!
              </BasketMessage>
            </BasketMessageContainer>
          )}
        </BasketContent>
      </BasketContainer>
      <BasketModalComponent />
    </>
  );
};

export default BasketComponent;
