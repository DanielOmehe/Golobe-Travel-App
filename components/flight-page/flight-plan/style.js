import styled from 'styled-components';

export const TravelPlanWrapper = styled.div`
    width: 80%;
    height: 300px;
    background: #fff;
    padding: 16px 32px 32px 32px;
    box-shadow: 0px 4px 16px rgba(141, 211, 187, 0.15);
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    border-radius: 16px;
    margin-bottom: 25rem;
`

export const TravelPlanTabNav = styled.div`
    width: 100%;
    height: 100px;
    padding: 20px 0;
`
export const Header = styled.h3`
    width: 100%;
    padding: 20px 0;
    font-weight: 600;
    text-align: left;
    font-size: 24px;

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
    padding: 0 20px 1rem;
    color: ${props => props.switchTab ? 'var(--mint-green)': 'black'};
    border-bottom: ${props => props.switchTab ? '3px solid var(--mint-green)' : 'none'};
    border-bottom-width: ${props => props.switchTab ? '100%' : '0'};
    transition: all .2s ease;
`

export const VerticalLine = styled.div`
    width: 2px;
    height: 45px;
    background: #D7E2EE;
    position absolute;
    top: -15px;
    left: 9rem;
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
    width: ${props => props.width || 'auto'};
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
    justify-content: space-between;
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