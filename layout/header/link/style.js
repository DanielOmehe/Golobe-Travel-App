import styled from "styled-components";

export const NavLinkWrapper = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    & a{
        text-decoration: none;
        color: #fff;
    }
`

export const NavIcon = styled.img`
    width: ${props => props.iconSize ? props.iconSize : '20px'};
    height: ${props => props.iconSize ? props.iconSize : '20px'};
`

