import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setClearCart } from '../../redux/reducers/actions';
import Button from '../styled-components/Button';
import Cart from './Cart';
import EmptyCart from './EmptyCart';
import {
  ButtonBlock,
  CartContainetStyledWrapper,
  TotalPrice
} from './CartContainer.styled';

const CartContainer = () => {

  const cartProducts = useSelector(state => state.main.cartProducts);
  const dispatch = useDispatch();
  const totalPrice = cartProducts
    .reduce((acc, cartProducts) => acc += cartProducts.price * cartProducts.count, 0)
    .toFixed(2);

  function clearCart() {
    dispatch(setClearCart())
  }

  return (

    cartProducts.length
      ?

      <CartContainetStyledWrapper>
        <TotalPrice>Total price: <span>{totalPrice}</span>$</TotalPrice>
        <div>
          {
            cartProducts.map((prod, index) =>
              <Cart key={index} prod={prod} />
            )
          }
        </div>
        <ButtonBlock>
          <Button >CHECKOUT</Button>
          <Button background='orangered' onClick={() => clearCart()}>CLEAR</Button>
        </ButtonBlock>
      </CartContainetStyledWrapper>
      :

      <EmptyCart />
  );
};

export default CartContainer;