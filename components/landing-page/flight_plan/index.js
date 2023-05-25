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
import FlightTab from "./flight-tabs";
import HotelTab from "./hotels-tab";
import TravelTab from "./traveltab";

const TravelPlan = () => {
  const { slide, switchTab } = useContext(LandingPageContext);
  console.log(slide);
  return (
    <TravelPlanWrapper>
      <TravelPlanTabNav>
        <TravelPlanNavItems>
          {tabs.map((tab, index) => (
            <TravelPlanNavItem onClick={(e) => switchTab(index, e)} key={tab.key}>
              <TabIcon src={tab.image} />
              <p>{tab.name}</p>
            </TravelPlanNavItem>
          ))}
          <VerticalLine />
          <HorizontalLine slide={slide} />
        </TravelPlanNavItems>
      </TravelPlanTabNav>
      <TravelTab>
        <FlightTab />
        <HotelTab />
      </TravelTab>
    </TravelPlanWrapper>
  );
};

export default TravelPlan;
