import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 100%;
	position: relative;
`;

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: monospace;
        font-size: x-large;
    }

    html, body {
        display: flex;
        gap: 20px 20px;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
        position: relative;
        width: 100%;
        height: 100%;
    }
`;
