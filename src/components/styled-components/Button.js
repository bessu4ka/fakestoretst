import styled from 'styled-components';

const Button = styled.button`
  border: none;
  padding: 5px 5px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 3px;
  background: ${({ background }) => background || 'dimgray'};
  color: white;
  width: 150px;
  height: 40px;
  box-shadow: 1px 0px 5px black;
  margin:${({ margin }) => margin || '0'};
    &:hover{
  color: black;
}
`;

export default Button;