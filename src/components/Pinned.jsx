import React from "react";
import styled from "styled-components";

const PinnedRecipeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100px;
`;

const PinnedRecipeImg = styled.img`
  --size: 75px;
  width: var(--size);
  height: var(--size);

  &.small {
    --size: 50px;
  }

  &.medium {
    --size: 100px;
  }

  &.large {
    --size: 150px;
  }

  border-radius: 50%;
  border: 4px solid var(--primary-color);

  cursor: pointer;
`;

const PinnedRecipeComponent = ({ title, image_url, size }) => {
  return (
    <PinnedRecipeContainer>
      <PinnedRecipeImg className={size} title={title} src={image_url} />
    </PinnedRecipeContainer>
  );
};

export default PinnedRecipeComponent;
