import {
    TabIcon,
    TravelInput,
    TravelInputGroup,
    TravelLabel,
    TravelOption,
    TravelSelect,
    TravelPlanTab,
    TravelPlanTabTop,
    TravelPlanTabBottom
  } from "./style";

  import { Button } from "../../utility/style";

const HotelTab =()=>{
    return(
        <TravelPlanTab>
        <TravelPlanTabTop>
          <TravelInputGroup>
            <TravelLabel>Enter Destination</TravelLabel>
            <TravelInput type="text" width='350px' placeholder="Havana, Cuba" />
          </TravelInputGroup>
          <TravelInputGroup>
            <TravelLabel>Check in</TravelLabel>
            <TravelInput type="date" width='255px' />
          </TravelInputGroup>
          <TravelInputGroup>
            <TravelLabel>Chcek out</TravelLabel>
            <TravelInput type="date" width='255px' placeholder="Enter departure time" />
          </TravelInputGroup>
          <TravelInputGroup>
            <TravelLabel>Room & Guests</TravelLabel>
            <TravelSelect width="255px">
                <TravelOption>something</TravelOption>
                <TravelOption>something</TravelOption>
                <TravelOption>something</TravelOption>
            </TravelSelect>
          </TravelInputGroup>
        </TravelPlanTabTop>
        <TravelPlanTabBottom>
          <Button color="#000">
            <TabIcon src="images/plus.svg" />
            <p>Add Promo code</p>
          </Button>
          <Button background="#8DD3BB" color="#000">
            <TabIcon src="images/hotel.svg" />
            <p>Show Places</p>
          </Button>
        </TravelPlanTabBottom>
      </TravelPlanTab>
    )
}

export default HotelTab