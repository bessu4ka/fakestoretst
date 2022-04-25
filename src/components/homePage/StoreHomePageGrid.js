import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  WrapperComponent,
  Image,
  WrapperTile
} from './StoreHomePageGrid.styled';

const StoreHomePage = (props) => {

  const { image, id } = props.prod


  const navigate = useNavigate();

  return (
    <WrapperComponent>
      <WrapperTile>
        <Image onClick={() => { navigate(`/details/${id}`) }} src={image} />
      </WrapperTile>
    </WrapperComponent>
  );
};

export default StoreHomePage;