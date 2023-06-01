import styled from 'styled-components';

export const PlacesWrapper = styled.div`
    width: 80%;
    margin:auto;
    display: grid;
    gap:20px;
    grid-template-columns: repeat(4, minmax(300px, 1fr));
    color: #112211;
`
export const PlacesFlex = styled.div`
    display: flex;
    height: 450px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap:10px;
    background: #fff;
    box-shadow:0px 4px 16px rgba(17, 34, 17, 0.05);
    border-radius: 16px;
    padding: 16px;
    position: relative;
`
export const PlacesBg = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 16px;
    top: 0;
    left: 0;
    z-index: 1;
`
export const PlacesTitle = styled.p`
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: white;
`
export const FlightPrize = styled.p`
    font-weight: 500;
    font-size: 1.2rem;
    color: white;
`
export const DetailsBox = styled.div`
    width: 100%;
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9;
`
export const PlacesSubTitle = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: white;
`
export const FlightBtn = styled.p`
    font-size: 14px;
    font-weight: 500;
    width: 100%;
    padding: 16px;
    text-align: center;
    color: black;
    background-color: var(--mint-green);
    border-radius: 8px;
    z-index: 5;
`