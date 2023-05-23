import styled from "styled-components";

export const NavWrapper = styled.nav`
    width: 100%;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
        color: ${props => props.color ? props.color : 'white'};
    }
`