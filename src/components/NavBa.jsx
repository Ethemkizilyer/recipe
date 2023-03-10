import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { useDisplayIngredients } from "../hooks/ingredientBasket.hook"

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

// logo
import Logo from "../assets/img/forkify.logo";

const Navbara = styled.header`
  display: grid;
  place-items: center;
  width: 100%;

  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 0.75rem;

  position: relative;
  z-index: 1;
`;

const Nav = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 75%;
`;

export const UndecoratedLink = styled(Link)`
  text-decoration: none;
`;

const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  cursor: pointer;
`;

const NavbarOptions = styled.div`
  /* parent styles */
  justify-self: end;

  display: flex;
  align-items: center;
  gap: 16px;
`;

const NavTextLogo = styled.h2`
  color: var(--primary-color);
  font-family: "Raleway", sans-serif;
  font-size: 1.5rem;
`;

const NavTextOption = styled(Link)`
  display: flex;
  gap: 4px;

  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  text-decoration: none;

  color: var(--primary-color);
  background-color: white;

  border: none;
  cursor: pointer;

  transition: 300ms ease-in-out;
  &:hover {
    color: var(--secondary-color);
  }

  position: relative;
`;

const NavBar = () => {
  const { basket } = useDisplayIngredients();
  return (
    <Navbara>
      <Nav>
        <UndecoratedLink to="/">
          <NavbarLogo>
            <Logo />
            <NavTextLogo>BakarYE</NavTextLogo>
          </NavbarLogo>
        </UndecoratedLink>
        <NavbarOptions>
          <NavTextOption to="/search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            Search
          </NavTextOption>
          <NavTextOption to="/basket">
            <FontAwesomeIcon icon={faShoppingBasket} />
            Basket {`(${basket.length})`}
          </NavTextOption>
        </NavbarOptions>
      </Nav>
    </Navbara>
  );
};

export default NavBar;
