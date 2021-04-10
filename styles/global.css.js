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

  .temps{
    min-width: 380px;
    margin: 5px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    }

  .humidity {
    min-width: 380px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 20px;
    justify-self: flex-end;    
  }
  .lighten {
    color: rgba(0, 0, 0, 0.7);
    margin: 0 2px 0 2px;
  }

  .currentTemp {
    font-size: 200px;
    min-width: 100px;
    padding: 0px;
    margin: 0.5rem;
  }

  .hilow {
    align-self: center;
    font-size: 50px;
    color: rgba(0, 0, 0, 0.8)
  }
  .description {
    align-self: center;
    font-size: 80px;
    color: rgba(0,0,0,0.8)
  }
    
`;