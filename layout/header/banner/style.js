import styled from 'styled-components'

export const BannerWrapper = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;                     
    align-items: center;
    justify-content: center;
    color: #fff;
    background: linear-gradient(to top, rgba(0,0,0,.54), rgba(0,0,0,.17)), url(${props => props.url ? props.url : 'images/background.png'});
    background-repeat: no-repeat;
    background-position: ${props => props.position || '100% 0%'};
    background-size: cover;
    position: absolute;
    top: ${p => p.top ? p.top : '0'};
    left: 0;
    z-index: 0;
`