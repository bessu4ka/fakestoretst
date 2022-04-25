import React from 'react';
import Button from '../../styled-components/Button';
import { useNavigate } from 'react-router-dom';
import { NoMatchWrapper } from './NoMatch.styled';

const NoMatch = () => {

  const navigate = useNavigate();

  return (
    <NoMatchWrapper>
      <Button onClick={() => { navigate(`/`) }}>GO SHOP</Button>
      <div>PAGE NOT FOUND</div>
    </NoMatchWrapper>
  );
};

export default NoMatch;