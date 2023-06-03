import React from 'react'
import { TicketWrapper, TicketDetails, TicketRoute, TicketTime, FlightIcons, Time, Destination,Icon, UserSection, UserDetails, UserDp, UserInfo, Name, Pass, TicketInfo, TicketInfoBox, TicketIcon, Code, BarCode} from '../style'

// const ticketInfos= [
//     {
//         title: 'Date',
//         subtitle: 'Newark(EWR)',
//         icon: '',
//     },
//     {
//         title: 'Flight Time',
//         subtitle: '12:00',
//         icon: '',
//     },
//     {
//         title: 'Gate',
//         subtitle: 'A12',
//         icon: '',
//     },
//     {
//         title: 'Seat',
//         subtitle: '128',
//         icon: '',
//     },
// ]
const FlightTicket = ({ ticketInfos, time, destination, name, pass, Class, letter, number }) => {
  return (
    <TicketWrapper>
      <TicketTime>
        <Time>{time}<br /><Destination>{destination}</Destination></Time>
        <FlightIcons>
        <Icon src='images/svgs/nodeUp.svg' style={{width: '40px', height: '44px'}}/>
        <Icon src='images/svgs/flightdown.svg' style={{width: '40px', height: '44px'}}/>
        <Icon src='images/svgs/nodeDown.svg' style={{width: '40px', height: '44px'}}/>
        </FlightIcons>
        <Time>{time}<br /><Destination>{destination}</Destination></Time>
      </TicketTime>
      <TicketDetails>
        <UserSection>
            <UserDetails>
                <UserDp src='images/svgs/image.svg' />
                <UserInfo>
                    <Name>{name}</Name>
                    <Pass>{pass}</Pass>
                </UserInfo>
            </UserDetails>
            <span style={{fontWeight: 'bold'}}>{Class}</span>
        </UserSection>
        <TicketInfo>
            <TicketInfoBox>
                {
                    ticketInfos.map((info, index)=>{
                        return(
                            <div style={{width: 'fit-content', display: 'flex', gap: '10px'}} key={index}>
                            <TicketIcon><Icon src={info.icon}/></TicketIcon>
                            <UserInfo style={{height: '40px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
                                <span style={{fontSize: '14px'}}>{info.title}</span>
                                <span style={{fontSize: '14px'}}>{info.subtitle}</span>
                            </UserInfo>
                        </div>
                        )
                    })
                }
               
            </TicketInfoBox>
            <Code>
                    <Name style={{fontSize: '24px', marginBottom: '10px'}}>{letter}</Name>
                    <Pass>{number}</Pass>
            </Code>
            <BarCode src='images/svgs/barcode.svg'/>
        </TicketInfo>
      </TicketDetails>
      <TicketRoute></TicketRoute>
    </TicketWrapper>
  )
}

export default FlightTicket
