import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { productsAPi } from '../../api/api';
import { setCartProduct, setProductsDetail } from '../../redux/reducers/actions';
import Button from '../styled-components/Button';
import {
  ProductDetailsContainer,
  Image,
  ButtonBlock,
  Title,
  Description,
  Price,
  ProductInfo,
} from './ProductDetails.styled';

const ProductDetails = () => {

  const { productId } = useParams();
  const dispatch = useDispatch();
  const productInfo = useSelector(state => state.main.productsDetail);
  const navigate = useNavigate();

  useEffect(() => {
    productsAPi.getItemInfo(productId)
      .then(data => {
        return dispatch(setProductsDetail(data))
      })
  }, []);

  function addToCart(productInfo) {
    dispatch(setCartProduct(productInfo))
  }

  return (
    <ProductDetailsContainer>

      <Title>{productInfo.title}</Title>

      <ProductInfo>
        <Image src={productInfo.image} />
        <Description>{productInfo.description}</Description>
      </ProductInfo>

      <ButtonBlock>
        <Button margin='0 0 0 40px' onClick={() => { navigate(`/`) }}>GO BACK</Button>
        <Price>{productInfo.price}$</Price>
        <Button margin='0 40px 0 0' background='orangered' onClick={() => addToCart(productInfo)}>ADD TO CART</Button>
      </ButtonBlock>

    </ProductDetailsContainer>
  );
};

export default ProductDetails;