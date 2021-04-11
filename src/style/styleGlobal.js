import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: 'Raleway', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.body};
    transition: all .8s linear;
  }
`