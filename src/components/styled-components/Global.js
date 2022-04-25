import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: white;
  ${'' /* overflow-y: overlay; */}
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
`;

const Global = (props) => {
  return <GlobalStyles {...props} />
};

export default Global;