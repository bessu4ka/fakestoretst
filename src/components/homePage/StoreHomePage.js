import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCartProduct } from '../../redux/reducers/actions';
import Button from '../styled-components/Button';
import {
  BottomBlock,
  HomePageContainer,
  Image,
  UpperBlock,
  Title,
  ImageWrapper,
  Price
} from './StoreHomePage.styled';

const StoreHomePage = (props) => {

  const { image, title, price, id } = props.prod

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addToCart(product) {
    dispatch(setCartProduct(product))
  }

  return (
    <HomePageContainer>

      <UpperBlock>
        <ImageWrapper>
          <Image src={image} />
        </ImageWrapper>
        <Title>{title}</Title>
      </UpperBlock>

      <BottomBlock>
        <Price>{price}$</Price>
        <Button onClick={() => { navigate(`/details/${id}`) }} >
          MORE
        </Button>
        <Button margin='0 0 0 10px' background='orangered' onClick={() => addToCart(props.prod)}>
          ADD TO CART
        </Button>
      </BottomBlock>

    </HomePageContainer>
  );
};

export default StoreHomePage;