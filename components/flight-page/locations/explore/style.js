import styled from 'styled-components';

export const PlacesWrapper = styled.div`
    width: 80%;
    margin:auto;
    display: flex;
    justify-content: space-between;
    gap:20px;
    color: #112211;
`
export const PlacesFlex = styled.div`
    display: flex;
    flex-basis: 45%;
    height: 485px;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    background: var(--mint-green);
    box-shadow:0px 4px 16px rgba(17, 34, 17, 0.05);
    border-radius: 16px;
    padding: 16px;
    position: relative;
`
export const ExploreGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    grid-template-rows: repeat(2, minmax(200px, 1fr));
    flex-basis: 55%;
    gap: 16px;
    background: #fff;
    height: 485px;
    border-radius: 16px;
`
export const GridItem = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 16px;
`

export const PlacesTitle = styled.p`
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 20px;
    color: #000;
`
export const FlightPrize = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: #000;
    padding: 12px;
    border-radius: 8px;
    background: #fff;
    position: absolute;
    top: 0;
    right: 0;
`
export const DetailsBox = styled.div`
    width: 100%;
    padding: 10px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 9;
    position: relative;
`
export const PlacesSubTitle = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    color: #000;
`
export const FlightBtn = styled.p`
    font-size: 14px;
    font-weight: 500;
    width: 100%;
    padding: 16px;
    text-align: center;
    color: black;
    background-color: #fff;
    border-radius: 8px;
    z-index: 5;
`
