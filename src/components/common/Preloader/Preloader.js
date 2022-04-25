import React from 'react';
import { StyledPreloader } from './Preloader.styled'
import loader from '../../../assets/images/loader.gif'

const Preloader = () => {
  return (
    <StyledPreloader>
      <img src={loader} />
    </StyledPreloader>
  );
};

export default Preloader;