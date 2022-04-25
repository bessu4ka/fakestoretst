import styled from 'styled-components';

const StyledCartWrapper = styled.div`
  display: flex;
  box-shadow: 1px 0px 5px black;
  margin: 10px 2px;
  padding: 40px;
  height: 300px;
  display: flex;
  justify-content: space-between;
`;

const Images = styled.img`
  max-width: 150px;
  @media ${props => props.theme.media.tablet}{
    max-width: 100px;
  }
`;

const Title = styled.div`
  color: dimgray;
  font-size: 18px;
  margin-left: 10px;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media ${props => props.theme.media.tablet}{
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  padding: 30px;
  color: dimgray;
  span{
    color: orangered;
    font-weight: 700;
  }
`;

const Icon = styled.img`
  width: 30px;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px 0;
`;

export {
  StyledCartWrapper,
  Images,
  Title,
  ProductInfo,
  Info,
  ButtonWrapper,
  Icon,
};