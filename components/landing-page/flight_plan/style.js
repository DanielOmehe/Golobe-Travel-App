import styled from 'styled-components';

export const TravelPlanWrapper = styled.div`
    width: 1200px;
    height: 300px;
    background: #fff;
    margin: -7rem auto 5rem;
    border-radius: 16px;
    padding: 16px 32px 32px 32px;
    box-shadow: 0px 4px 16px rgba(141, 211, 187, 0.15);
`

export const TravelPlanTabNav = styled.div`
    width: 100%;
    height: 100px;
    padding: 20px 0;
`

export const TravelPlanNavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 40px;
    position: relative;
`

export const TravelPlanNavItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    cursor: pointer;
`

export const VerticalLine = styled.div`
    width: 2px;
    height: 45px;
    background: #D7E2EE;
    position absolute;
    top: -15px;
    left: 7rem;
`

export const HorizontalLine = styled.div`
    width: 100px;
    height: 5px;
    background: #8DD3BB;
    position: absolute;
    top: 2rem;
    left: ${props => props.slide ? '10%' : '0'};
    transition: all .3s linear;
`

export const TabIcon = styled.img`
    width: 20px;
    height: 20px;
`

export const TravelPlanTabWrapper = styled.div`
    width: auto;
    height: 160px;
    gap: 40px;
`
export const TravelPlanTab = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    gap: 30px;
`

export const TravelInputGroup = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    position: relative;
`

export const TravelSelect = styled.select`
    width: ${props => props.width || '140px'};
    height: 50px;
    padding: 0 10px;
    border: 1px solid #000;
    border-radius: 5px;
    outline: none;

    &:focus{
        border: 1px solid #0da2ff;
    }
`

export const TravelOption = styled.option`
    width: 100%;
`

export const TravelLabel = styled.label`
    font-size: 13px;
    color: black;
    position: absolute;
    top: -0.6rem;
    left: 1rem;
    background: white;
`

export const TravelInput = styled.input`
    width: ${props => props.width ? props.width : '300px'};
    height: 50px;
    padding: 20px;
    border: 1px solid #000;
    border-radius: 5px;
    outline: none;

    &:focus{
        border: 1px solid #0da2ff;
    }
`

export const TravelPlanTabTop = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    gap: 30px;
`

export const TravelPlanTabBottom = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;
`

export const TravelButton = styled.button`
    width: 160px;
    height: 50px;
    background: ${props => props.background || 'transparent'};
    color: ${ props => props.color || 'black'};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`