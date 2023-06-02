import styled from 'styled-components'

export const BannerWrapper = styled.section`
    width: 80%;
    padding: 40px 0px;
    margin: 5rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
`

export const Banner = styled.div`
    min-width: 604px;
    height: 559px;
    border-radius: 20px;
    background: ${props => props.url ? `url('${props.url}')` : 'none'};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 22rem 5rem 3rem 5rem;
    text-align: center;
`

export const BannerTitle = styled.h1`
    font-size: 40px;
    color: #fff;
    margin-bottom: 1rem;
`

export const BannerSubTitle = styled.p`
    font-size: 18px;
    color: #fff;
    margin-bottom: 1rem;
    line-height: 1.5rem;
`

export const BannerIcon = styled.img`
    width: 20px;
    height: 20px;
`

export const BannerButton = styled.button`
    width: 150px;
    height: 50px;
    background: var(--mint-green);
    border: none;
    outline: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 0 auto;
    cursor: pointer;

    & a{
        text-decoration: none;
        color: var(--black);
    }
`