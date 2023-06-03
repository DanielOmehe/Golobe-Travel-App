import styled from 'styled-components';

export const BookingDetailsWrapper = styled.div`
    width: 90%;
    height: auto;
    margin: 100px auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`
export const TicketWrapper = styled.div`
    width: 100%;
    height: 360px;
    margin: auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const TicketTime = styled.div`
    flex: 0 1 20%;
    height: 360px;
    display: flex;
    background-color: #CDEAE1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: 16px 0px 0px 16px;
    padding: 40px 20px;
`
export const TicketDetails = styled.div`
    flex: 0 1 50%;
    height: 360px;
    display: flex;
    border: 1px solid #CDEAE1;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 0px 16px 16px 0px;
`
export const TicketRoute = styled.div`
    flex: 0 1 30%;
    height: 360px;
    display: flex;
    background-color: #fff;
    border: 1px solid #CDEAE1;
    align-items: center;
    justify-content: flex-start;
    border-radius: 16px;
`
export const Time = styled.p`
     font-size: 28px;
    font-weight: bold;
    color: black;
    text-align: left;
`
export const Destination = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: black;
    text-align: left;
`
export const FlightIcons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
`
export const HeaderContainer = styled.div`
    width: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`
export const FlightCardHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const FCHLeft = styled.div`
    flex-basis: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`
export const FCHRight = styled.div`
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
`
export const FCHTitle = styled.h3`
    font-size: 28px;
    font-weight: 600;
`
export const Name = styled.h3`
    font-size: 20px;
    font-weight: 600;
`
export const Pass = styled.h3`
    font-size: 12px;
    font-weight: 400;
`
export const FCHSubtitle = styled.p`
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align: left;
    padding: 12px 4px;
`
export const NavContainer = styled.div`
    width: 100%;
    padding: 20px 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;

`
export const Place = styled.div`
    width: fit-content;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
`
export const PlaceTitle = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: ${ props => props.variant ? 'grey':'black'};
`
export const Icon = styled.img`
    width: ${props => props.variant ? '11px': '16px'};
    height:${props => props.variant ? '16px': '16px'};
    object-fit: cover;
    color: black;
`
export const Price = styled.span`
    font-size: 24px;
    font-weight: bold;
    color:'black';
    margin-bottom: 16px;
`
export const ButtonWrapper = styled.div`
    width: fit-content;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 16px;
`
export const ShareBtn = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 8px;
    border: 1px solid var(--mint-green);
    display: flex;
    align-items: center;
    justify-content: center;
`
export const DownloadBtn = styled.div`
    width: fit-content;
    padding: 10px 20px;
    height: 50px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    background-color: var(--mint-green);
   `
   export const UserSection = styled.div`
    width: 100%;
    height: 80px;
    background-color: var(--mint-green);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0px 16px 0px 0px;
    padding: 0px 20px;
`
export const UserDetails = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`
export const UserDp = styled.img`
 width: 50px;
 height: 50px;
 border-radius: 50%;

`
export const UserInfo = styled.div`
 width: fit-content;
 height: 50px;
 padding: 4px 0px;
`
export const Code = styled.div`
 width: fit-content;
 height: 50px;
 padding: 4px 0px;
 margin-bottom: 20px;
`
export const TicketInfo = styled.div`
 width: 100%;
 height: calc(100% - 80px);
 padding: 20px 40px 20px 20px;
 background-color: #fff;
 display:flex;
 border-radius: 0px 0px 16px 0px;
 flex-direction: column;
 justify-content: space-between;
 align-items: flex-start;
 position: relative;
 `
 export const TicketInfoBox = styled.div`
 width: 100%;
 display:flex;
 justify-content: space-between;
 align-items: center;
 `
 export const TicketIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-color:  #CDEAE1;
    border: 1px solid var(--mint-green);
    display: flex;
    align-items: center;
    justify-content: center;
`
export const BarCode = styled.img`
width: 250px;
height: 80px;
object-fit: center;
position: absolute;
right: 0;
bottom: 10px;
`
