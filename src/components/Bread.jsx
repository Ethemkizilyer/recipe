import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

import { UndecoratedLink } from "./NavBa";

const BreadCrumbContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  margin: 30px 0 0 0;
  width: 100%;
`;

const Breadcrmb = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  color: var(--primary-color);

  width: 85%;
`;

const BreadCrumb = ({ path, onClick = null }) => {
  return (
    <UndecoratedLink to={path} onClick={onClick}>
      <BreadCrumbContainer>
        <Breadcrmb>
          <FontAwesomeIcon icon={faAnglesLeft} />
          Back
        </Breadcrmb>
      </BreadCrumbContainer>
    </UndecoratedLink>
  );
};

export default BreadCrumb;
