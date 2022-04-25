import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarStyled, { BasketIcon } from './Navbar.styled';
import basket from '../../assets/images/basket.png'
import { useSelector } from 'react-redux';

const Navbar = () => {

  const products = useSelector(state => state.main.cartProducts);
  const quantityInCart = products.reduce((accum, prod) => accum + prod.count, 0)

  return (
    <NavbarStyled>
      <NavLink to='/'>Shop</NavLink>
      <NavLink to='/cart'>
        <BasketIcon src={basket} />{quantityInCart}
      </NavLink>
    </NavbarStyled>
  );
};

export default Navbar;