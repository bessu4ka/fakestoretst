import React from 'react';
import styled from 'styled-components';

const NavStyle = styled.nav`
  box-shadow: 1px 0px 5px black;
  padding: 0 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: DeepSkyBlue;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  position: sticky;
  border-radius: 0 0 5px 5px;
  max-width: 1200px;
  margin: 0 auto;
    a{
  text-decoration: none;
  background-color: transparent;
  color: black;
  font-weight: 700;
    &:hover{
    color: orangered;
    }
  }
`;

export const BasketIcon = styled.img`
  width: 30px;
  background: transparent;
`;

const NavbarStyled = (props) => {
  return <NavStyle {...props} />
};

export default NavbarStyled;