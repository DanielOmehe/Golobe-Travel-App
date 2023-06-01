import React from "react";
import SectionTitle from "../../../utility/section_title";
import {
  DetailsBox,
  ExploreGrid,
  FlightBtn,
  FlightPrize,
  GridItem,
  PlacesFlex,
  PlacesSubTitle,
  PlacesTitle,
  PlacesWrapper,
} from "./style";
import { views } from "../../../data/locations";

const Explore = () => {
  return (
    <div style={{ marginTop: "70px" }}>
      <SectionTitle
        title="Fall into travel"
        text="Going somewhere to celebrate this season? Whether you are going home or somewhere to roam, we've got the travel tools to get you to your destination"
        btnText="See All"
      />
      <PlacesWrapper>
        <PlacesFlex>
          <DetailsBox>
            <div>
              <PlacesTitle>
                Backpacking <br />
                Sri Lanka
              </PlacesTitle>
              <PlacesSubTitle>
                Traveling is a unique experience as it's the best way to unplug
                from the pushes and pulls of daily life. It helps us to forget
                about our problems, frustrations and fears at home. During our journey, we experience life in different ways. We explore new Places, 
                cultures, cuisines, traditions and ways of living.
              </PlacesSubTitle>
            </div>
            <FlightPrize>
              From <br />
              <strong>$700</strong>
            </FlightPrize>
          </DetailsBox>
          <FlightBtn>Book Flight</FlightBtn>
        </PlacesFlex>
        <ExploreGrid>
          {views.map((view, index) => (
            <GridItem src={view.image} key={index} />
          ))}
        </ExploreGrid>
      </PlacesWrapper>
    </div>
  );
};

export default Explore;
