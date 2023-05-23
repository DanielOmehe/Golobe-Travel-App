import styled from 'styled-components'

export const BannerWrapper = styled.section`
    min-height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;                     
    align-items: center;
    justify-content: center;
    color: #fff;
    
    & h1{
        font-size: 80px;
        font-weight: 600;
        margin-bottom: 16px;
        line-height: 101px;
        text-transform: uppercase;
    }
    & h2{
        font-size: 45px;
        font-weight: 600;
        margin-bottom: 4px;
    }
    & p{
        color: #fff;
        font-size: 20px;
    }
`
