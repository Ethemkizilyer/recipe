import React from "react";
import styled from "styled-components";

import DishCard from "../components/DishCard";

const SearchResultContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 85%;
`;

const SearchResul = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 285px);

  gap: 16px;

  margin: 25px auto;
  overflow: hidden;
`;

const SearchResult = ({ searchedRecipes }) => {
  const dishJSX = searchedRecipes.map((recipe) => (
    <DishCard
      id={recipe.id}
      title={recipe.title}
      author={recipe.publisher}
      IMG_URL={recipe.image_url}
    />
  ));
  return (
    <SearchResultContainer>
      <CenterDiv>
        <SearchResul>{dishJSX}</SearchResul>
      </CenterDiv>
    </SearchResultContainer>
  );
};

export default SearchResult;
