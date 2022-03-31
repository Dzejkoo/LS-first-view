import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&family=Poppins:wght@200;300;400;600&display=swap');

    html {
        box-sizing: border-box;
        overflow: hidden;
    }

    *, *::after, *::before{
        box-sizing: inherit;
    }

    body{
        font-family: 'Montserrat', sans-serif;
        margin: 0; 
        padding: 0;
        max-height: 100vh;
        overflow-x: hidden;
    }
`;
