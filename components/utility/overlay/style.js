import styled from "styled-components"

export const OverlayWrapper = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    text-align: ${props => props.align || 'center'};
    padding: 5rem;
`

export const OverlayHeader = styled.h2`
    font-size: ${props => props.size || '45px'};
    font-weight: 600;
    margin-bottom: 4px;
    color: #fff;
    padding-right: ${props => props.right || 0};
`

export const OverlayTitle = styled.h1`
    font-size: 80px;
    font-weight: 600;
    margin-bottom: 16px;
    line-height: 101px;
    text-transform: uppercase;
    color: #fff;
`

export const OverlaySubTitle = styled.p`
    color: #fff;
    font-size: 20px;
    color: #fff;
`