import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { UndecoratedLink } from "./NavBa";

const DishCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  max-width: 285px;
  padding: 1rem;
  background-color: var(--neutral-color1);

  border-radius: 8px;
  cursor: pointer;
  transition: 300ms ease-in-out;

  animation: fadein 2s;

  &:hover {
    background-color: var(--neutral-color2);
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const DishImg = styled.img`
  --size: 60px;
  width: var(--size);
  height: var(--size);

  border-radius: 50%;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const DishContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 75%;
  overflow: hidden;
`;

const DishTitle = styled.h1`
  font-family: "Raleway", sans-serif;
  color: var(--primary-color);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DishAuthor = styled.p`
  font-family: "Roboto", sans-serif;
  color: var(--primary-color);
`;

const DishCard = ({ id, author, title, IMG_URL }) => {
  return (
    <a
      style={{ textDecoration: "none", color: "#148d79" }}
      href={`/search/${id}`}
    >
      <DishCardContainer key={id} id={id}>
        <DishImg src={IMG_URL} />
        <DishContent>
          <DishTitle title={title}>{title}</DishTitle>
          <DishAuthor>{author}</DishAuthor>
        </DishContent>
      </DishCardContainer>
    </a>
  );
};

export default DishCard;
