import styled from "styled-components";

export const NavWrapper = styled.nav`
    width: 100%;
    height: 100px;
    padding: 10px 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background: ${props => props.color ? props.color : 'transparent'};
    box-shadow: ${props => props.shadow ? `0 0 5px rgba(0,0,0,.56)` : 'none'};
`

export const NavRight = styled.div`
    display: flex;
`

export const NavLeft = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`

export const NavButton = styled.button`
    width: 120px;
    height: 50px;
    background: ${props => props.background ? props.background : 'transparent' };
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 5px;

    & a{
        font-size: 16px;
        text-decoration: none;
        color: ${props => props.text || 'none'};
    }
`