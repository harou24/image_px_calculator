import styled from 'styled-components';

export const Button = styled.button`
    text-align: center;
    display: inline-block;
    padding: 10px 10px;
    color:  #E1E8F0;
    background-color: #1F5899;
    border: 2px solid #e0984c;
    font-size: 1.8rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1rem;
    transition: .3s ease;
    transition-property: background-color, color;
    cursor: pointer;
    border-radius: 30%;

:hover
{
    color: #E1E8F0;
    cursor: pointer;
    background: #8FC5FC;
}
`