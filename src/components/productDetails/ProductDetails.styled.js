import styled from 'styled-components';

const ProductDetailsContainer = styled.div`
  border: 1px solid DeepSkyBlue;
  box-shadow: 1px 0px 5px black;
  margin: 10px 0;
  border-radius: 5px;
  max-width: 1200px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: space-between;
`;

const Image = styled.img`
  max-width: 300px;
  margin: 40px;
`;

const Title = styled.div`
  color: dimgray;
  font-size: 24px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Description = styled.div`
  margin: 40px;
  color: dimgray;
  font-size: 20px;
`;

const Price = styled.div`
  color: orangered;
  font-size: 26px;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  @media ${props => props.theme.media.tablet}{
    flex-direction: column;
}
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export {
  ProductDetailsContainer,
  Image,
  Title,
  Description,
  Price,
  ProductInfo,
  ButtonBlock
};