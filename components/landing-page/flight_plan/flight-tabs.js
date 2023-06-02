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

const FlightTab = () => {
  return (
    <TravelPlanTab>
      <TravelPlanTabTop>
        <TravelInputGroup>
          <TravelLabel>from - to</TravelLabel>
          <TravelInput type="text" placeholder="Enter Destination" width='320px' />
        </TravelInputGroup>
        <TravelInputGroup>
          <TravelLabel>Trip</TravelLabel>
          <TravelSelect width='150px'>
            <TravelOption>return</TravelOption>
            <TravelOption>return</TravelOption>
          </TravelSelect>
        </TravelInputGroup>
        <TravelInputGroup>
          <TravelLabel>Depart - return</TravelLabel>
          <TravelInput type="text" placeholder="Enter departure time" width='320px' />
        </TravelInputGroup>
        <TravelInputGroup>
          <TravelLabel>Passenger - class</TravelLabel>
          <TravelInput type="text" placeholder="Enter flight class" width='320px' />
        </TravelInputGroup>
      </TravelPlanTabTop>
      <TravelPlanTabBottom>
        <Button color="#000">
          <TabIcon src="images/svgs/plus.svg" />
          <p>Add Promo code</p>
        </Button>
        <Button background="#8DD3BB" color="#000">
          <TabIcon src="images/svgs/plane.svg" />
          <p>Show Flights</p>
        </Button>
      </TravelPlanTabBottom>
    </TravelPlanTab>
  );
};

export default FlightTab;
