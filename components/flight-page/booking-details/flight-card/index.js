import React from 'react'
import { HeaderContainer, FlightCardHeader, FCHLeft, FCHRight, FCHTitle,FCHSubtitle, Icon, Price, ButtonWrapper, DownloadBtn, ShareBtn } from '../style'

const FlightCardHead = ({title, subtitle, price}) => {
  return (
    <HeaderContainer>
        <FlightCardHeader>
           <FCHLeft>
            <FCHTitle>{title}</FCHTitle>
              <FCHSubtitle><Icon src='images/svgs/location.svg' variant='location' />{subtitle}</FCHSubtitle>
           </FCHLeft>
           <FCHRight>
              <Price>{price}</Price>
              <ButtonWrapper>
                <ShareBtn><Icon src='images/svgs/share.svg' style={{width: '20px', height: '22px'}}/></ShareBtn>
                <DownloadBtn>Download</DownloadBtn>
              </ButtonWrapper>
           </FCHRight>
        </FlightCardHeader>
    </HeaderContainer>
  )
}

export default FlightCardHead
