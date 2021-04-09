import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
      background: rgb(82,34,195);
      background: linear-gradient(90deg, rgba(82,34,195,1) 0%, rgba(45,94,253,1) 100%);
      font-family: 'Acme', sans-serif;
    }
    h1 {
      font-size: 100px;
      color: rgba(255, 255, 255, 1);
      text-shadow: 1px 2px 0 #EEE, 0 0 0 #000, 1px 2px 0 #EEE;
      margin: 0rem;
    }

    h2 {
      font-size: 60px;
      text-align: center;
      margin: 0rem;
    }
    h3 {
      text-align: center;
      font-size: 40px;
    }
    p {
      text-align: center;
      font-size: 25px;
    }
    
`;