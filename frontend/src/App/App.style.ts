import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: monospace;
        font-size: x-large;
    }

    html, body {
        background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;
