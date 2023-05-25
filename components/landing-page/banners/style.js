import styled from 'styled-components'

export const BannerWrapper = styled.section`
    width: 100%;
    padding: 40px 100px;
    border: 2px solid #edcded;
    margin: 5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
`

export const Banner = styled.div`
    width: 604px;
    height: 559px;
    border: 2px solid black;
    border-radius: 10px;
    background: ${props => props.url ? `url(${props.url})` : 'none'};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`