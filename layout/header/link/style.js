import styled from "styled-components";

export const NavLinkWrapper = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    position: relative;

    & a{
        text-decoration: none;
        color: ${props => props.color || 'none'};
    }
    &:nth-child(1){
        height: 100px;
        & ::after{
            content: '';
            position: absolute;
            left: 0;
            top: 100%;
            height: 4px;
            background-color: var(--mint-green);
            width: 65%;
        }
    }
   
`

export const NavIcon = styled.img`
    width: ${props => props.iconSize ? props.iconSize : '20px'};
    height: ${props => props.iconSize ? props.iconSize : '20px'};
`

