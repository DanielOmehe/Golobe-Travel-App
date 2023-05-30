import styled from 'styled-components';

export const PlacesWrapper = styled.div`
    width: 80%;
    margin:auto;
    display: grid;
    gap:32px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    color: #112211;
`
export const PlacesFlex = styled.div`
    display: flex;
    align-items: center;
    gap:16px;
    background:#FFFFFF;
    box-shadow:0px 4px 16px rgba(17, 34, 17, 0.05);
    border-radius: 16px;
    padding:16px;
`
export const PlacesTitle = styled.p`
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 8px;
`
export const PlacesSubTitle = styled.p`
    font-size: 14px;
    font-weight: 500;
`