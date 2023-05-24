import {
  TabIcon,
  TravelInput,
  TravelLabel,
  TravelPlanNavItem,
  TravelPlanNavItems,
  TravelPlanTab,
  TravelPlanTabNav,
  TravelPlanTabTop,
  TravelPlanTabWrapper,
  TravelPlanWrapper,
  TravelInputGroup,
  TravelSelect,
  TravelOption,
  TravelPlanTabBottom,
  TravelButton,
  VerticalLine,
  HorizontalLine,
} from "./style";
import { tabs } from "../../data/tabs";
import { useContext } from "react";
import { LandingPageContext } from "../../../context/landing-page";

const TravelPlan =()=>{
    const { currentTab, switchTab } = useContext(LandingPageContext);
    console.log(currentTab);
  return (
    <TravelPlanWrapper>
      <TravelPlanTabNav>
        <TravelPlanNavItems>
          {tabs.map((tab, index) => (
            <TravelPlanNavItem onClick={(e)=>switchTab(e)} key={tab.key}>
              <TabIcon src={tab.image} />
              <p>{tab.name}</p>
            </TravelPlanNavItem>
          ))}
          <VerticalLine />
          <HorizontalLine left={currentTab} />
        </TravelPlanNavItems>
      </TravelPlanTabNav>
      <TravelPlanTabWrapper>
        <TravelPlanTab>
          <TravelPlanTabTop>
            <TravelInputGroup>
              <TravelLabel>from - to</TravelLabel>
              <TravelInput type="text" placeholder="Enter Destination" />
            </TravelInputGroup>
            <TravelInputGroup>
              <TravelLabel>Trip</TravelLabel>
              <TravelSelect>
                <TravelOption>return</TravelOption>
                <TravelOption>return</TravelOption>
              </TravelSelect>
            </TravelInputGroup>
            <TravelInputGroup>
              <TravelLabel>Depart - return</TravelLabel>
              <TravelInput type="text" placeholder="Enter departure time" />
            </TravelInputGroup>
            <TravelInputGroup>
              <TravelLabel>Passenger - class</TravelLabel>
              <TravelInput type="text" placeholder="Enter flight class" />
            </TravelInputGroup>
          </TravelPlanTabTop>
          <TravelPlanTabBottom>
            <TravelButton>
              <TabIcon src="images/plus.svg" />
              <p>Add Promo code</p>
            </TravelButton>
            <TravelButton background="#8DD3BB">
              <TabIcon src="images/plane.svg" />
              <p>Show Flights</p>
            </TravelButton>
          </TravelPlanTabBottom>
        </TravelPlanTab>
        <TravelPlanTab>
          <TravelPlanTabTop>
            <TravelInputGroup>
              <TravelLabel>Enter - Destination</TravelLabel>
              <TravelInput type="text" width='350px' placeholder="Enter Destination" />
            </TravelInputGroup>
            <TravelInputGroup>
              <TravelLabel>Check in</TravelLabel>
              <TravelInput type="date" width='230px' />
            </TravelInputGroup>
            <TravelInputGroup>
              <TravelLabel>Chcek out</TravelLabel>
              <TravelInput type="date" width='230px' placeholder="Enter departure time" />
            </TravelInputGroup>
            <TravelInputGroup>
              <TravelLabel>Room & Guests</TravelLabel>
              <TravelInput type="text" width='230px' placeholder="Enter flight class" />
            </TravelInputGroup>
          </TravelPlanTabTop>
          <TravelPlanTabBottom>
            <TravelButton>
              <TabIcon src="images/plus.svg" />
              <p>Add Promo code</p>
            </TravelButton>
            <TravelButton background="#8DD3BB">
              <TabIcon src="images/plane.svg" />
              <p>Show Flights</p>
            </TravelButton>
          </TravelPlanTabBottom>
        </TravelPlanTab>
      </TravelPlanTabWrapper>
    </TravelPlanWrapper>
  );
};

export default TravelPlan;
