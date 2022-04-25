import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import plus from '../../assets/images/plus.png';
import minus from '../../assets/images/minus.svg';
import {
  setCartProduct,
  setRemoveCartProduct,
} from '../../redux/reducers/actions';
import {
  Images,
  StyledCartWrapper,
  Info, ButtonWrapper,
  Icon,
  ProductInfo,
  Title,
} from './Cart.styled';

const Cart = ({ prod }) => {

  const { id, image, title, price, count } = prod;

  const dispatch = useDispatch();

  function addToCart(productId) {
    dispatch(setCartProduct(productId));
  }

  function removeItem(productId) {
    dispatch(setRemoveCartProduct(productId));
  }

  return (
    <StyledCartWrapper>

      <ProductInfo>
        <Link to={`/details/${id}`}>
          <Images src={image} />
        </Link>
        <Title>title: {title}</Title>
      </ProductInfo>

      <Info>
        <div>price: <span>{price}$</span></div>
        <div>amount: <span>{count}</span></div>
      </Info>

      <ButtonWrapper>
        <Icon src={plus} onClick={() => addToCart(prod)} />
        <Icon src={minus} onClick={() => removeItem(id)} />
      </ButtonWrapper>

    </StyledCartWrapper>
  );
};

export default Cart;