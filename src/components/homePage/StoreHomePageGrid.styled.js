import styled from 'styled-components';

const WrapperComponent = styled.div`
  max-width: 1200px;
  margin: auto;
  display: inline-block;

`;

const WrapperTile = styled.div`
  border: 1px solid DeepSkyBlue;
  box-shadow: 1px 0px 5px black;
  border-radius: 5px;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px;
  cursor: pointer;
`;

const Image = styled.img`
  max-height: 120px;
`;

export {
  WrapperComponent,
  Image,
  WrapperTile,
}