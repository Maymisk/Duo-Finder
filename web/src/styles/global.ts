import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, button, textarea {
        font-size: 1rem;
        font-weight: 400;
        font-family: 'Inter', sans-serif;
    }

    body {
        min-height: 100vh;

        background: url('/background.png') no-repeat center/cover;

        padding: 4rem 1rem;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    a {
        text-decoration: none;
    }

    button  {
        border: none;

        cursor: pointer;
    }

    input {
        border: none;
    }

    @media (max-width: 1120px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 768px) {
        html {
            font-size: 87.5%;
        }
    }
`;
