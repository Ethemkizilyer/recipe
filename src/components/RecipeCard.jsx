import React from "react";
import styled from "styled-components";

const RecipeCardContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const Recipe = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 300px 450px 1fr;
  gap: 20px;

  width: 1080px;
  margin: 30px 0;
  background-color: var(--neutral-color1);

  border: 1px solid var(--primary-color);
  border-radius: 4px;
  padding: 1rem;
`;

const RecipeCard = ({}) => {
  return (
    <RecipeCardContainer>
      <Recipe></Recipe>
    </RecipeCardContainer>
  );
};

export default RecipeCard;
