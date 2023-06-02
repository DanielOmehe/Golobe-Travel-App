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
    Header,
  } from "./style";

  import FlightTab from "./flight-tabs";
  import TravelTab from "./traveltab";
  
  const TravelPlan = () => {
    return (
      <TravelPlanWrapper>
        <TravelPlanTabNav>
          <TravelPlanNavItems>
            <Header>Where are you flying?</Header>
          </TravelPlanNavItems>
        </TravelPlanTabNav>
        <TravelTab>
          <FlightTab />
        </TravelTab>
      </TravelPlanWrapper>
    );
  };
  
  export default TravelPlan;