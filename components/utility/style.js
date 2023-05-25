import styled from "styled-components";

export const Button = styled.button`
    height: 50px;
    width: auto;
    border: 1px solid ${props => props.background ? props.background : 'transparent' };
    background: ${props => props.background ? props.background : 'transparent' };
    color: ${props => props.color ? props.color : 'transparent' };
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 20px;
`;