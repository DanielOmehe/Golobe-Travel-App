import styled from "styled-components";

export const Button = styled.button`
    height: 40px;
    width: 80px;
    border: 1px solid ${props => props.background ? props.background : 'transparent' };
    background: ${props => props.background ? props.background : 'transparent' };
    color: ${props => props.color ? props.color : 'transparent' };
    border-radius: 5px;
    cursor: pointer;
`;