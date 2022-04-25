import styled from 'styled-components';

const CartContainetStyledWrapper = styled.div`
  border: 1px solid DeepSkyBlue;
  box-shadow: 1px 0px 5px black;
  margin: 10px 0;
  border-radius: 5px;
  max-width: 1200px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: center;
  color: dimgray;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  span{
    color: orangered;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px;
`;

export {
  CartContainetStyledWrapper,
  TotalPrice,
  ButtonBlock
};