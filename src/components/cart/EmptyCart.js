import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../styled-components/Button';
import { EmptyCartWrapper } from './EmptyCart.styled';

const EmptyCart = () => {

  const navigate = useNavigate();

  return (
    <EmptyCartWrapper>
      <Button onClick={() => { navigate(`/`) }}> GO SHOP</Button>
      <div>Cart is empty</div>
    </EmptyCartWrapper>
  );
};

export default EmptyCart;