import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGrid, setList, setProducts } from '../../redux/reducers/actions';
import { productsAPi } from '../../api/api'
import StoreHomePage from './StoreHomePage';
import Preloader from '../common/Preloader/Preloader';
import StoreHomePageGrid from './StoreHomePageGrid';
import { ViewStyled, ButtonWrapper, StoreContetnt } from './StoreContainer.styled';

const StoreContainer = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.main.products);
  const isFetching = useSelector(state => state.main.isFetching);
  const isListView = useSelector(state => state.main.view)

  useEffect(() => {
    productsAPi.getProducts().then(data => {
      const productList = data.map(product => ({ ...product, count: 0 }))
      return dispatch(setProducts(productList));
    })
  }, [])

  function toList() {
    dispatch(setList())
  }

  function toTile() {
    dispatch(setGrid())
  }

  return (
    <div>
      <ButtonWrapper>
        <ViewStyled onClick={() => toList()}>LIST</ViewStyled>
        <ViewStyled onClick={() => toTile()}>GRID</ViewStyled>
      </ButtonWrapper>
      <StoreContetnt>
        {
          isFetching
            ?

            <Preloader />
            :

            products.map(prod => {
              if (isListView) {
                return <StoreHomePage key={prod.id} prod={prod} />
              }
              else {
                return <StoreHomePageGrid key={prod.id} prod={prod} />
              }
            })

        }
      </StoreContetnt>
    </div>
  );
};

export default StoreContainer;