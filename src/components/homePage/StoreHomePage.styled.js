import styled from 'styled-components';

const HomePageContainer = styled.div`
  display: flex;
  border: 1px solid DeepSkyBlue;
  justify-content: space-between;
  height: 220px;
  box-shadow: 1px 0px 5px black;
  margin: 10px auto;
  border-radius: 5px;
  max-width: 1200px;
  @media ${props => props.theme.media.tablet}{
    flex-direction: column;
  }
`;

const Image = styled.img`
  max-height: 150px;
  max-width: 150px;
  @media ${props => props.theme.media.tablet}{
    max-height: 100px;
    max-width: 100px;
    margin-top: 20px;
  }
`;

const ImageWrapper = styled.div`
  width: 200px;
  @media ${props => props.theme.media.tablet}{
    width: 150px;
  }
`;

const Title = styled.div`
  color: dimgray;
  @media ${props => props.theme.media.tablet}{
    font-size: 24px;
  }
`;

const Price = styled.div`
  color: orangered;
  font-size: 26px;
  margin-right: 10px;
`;

const UpperBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 60px;
`;

const BottomBlock = styled.div`
  display: flex;
  align-items: center;
  margin-right: 60px;
  @media ${props => props.theme.media.tablet}{
    justify-content: center;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export {
  HomePageContainer,
  Image,
  Title,
  UpperBlock,
  BottomBlock,
  ImageWrapper,
  Price
};