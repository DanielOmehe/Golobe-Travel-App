import styled from 'styled-components'

export const FooterWrapper = styled.footer`
    position: relative;
    width: 100%;
    height: 500px;
    background: var(--mint-green);
    margin-top: 15rem;
    padding: 10rem 10rem 2rem;
`

export const FooterItems = styled.section`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: flex-start;
    gap: 2.5rem;
    position: absolute; 
    top: 50%;
`

export const FooterItemHeader = styled.h2`
    font-size: 16px;
`

export const FooterLinks = styled.ul``

export const FooterLink = styled.li`
    margin: 1rem 0;
    list-style-type: none;
    & a{
        color: black;
        font-size: 14px;
        text-decoration: none;

        &:hover{
            text-decoration: underline;
        }
    }
`

export const FooterItem = styled.div`
    width: auto;
    height: auto;
    padding: 1rem;

    &:nth-child(1){
        margin-right: 2.5rem;

        & img{
            margin-bottom: 1rem;
        }
    }
`

export const FooterLogo = styled.img``

export const FooterIcons = styled.div`
    display: flex;
    gap: 1rem;
`

export const FooterIcon = styled.img`
    width: 20px;
    height: 20px;
`