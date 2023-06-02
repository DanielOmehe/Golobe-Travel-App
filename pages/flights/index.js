import { Header, Banner, NavBar, Footer } from "../../layout";
import { Overlay } from "../../components/utility";
import { FlightContext } from "../../context";
import Explore from "../../components/flight-page/locations/explore";
import Locations from "../../components/flight-page/locations";
import Places from "../../components/flight-page/places";
import { FlightPlan } from "../../components/flight-page";

const Flights = () => {
  return (
    <FlightContext>
      <Header>
        <NavBar
          background="white"
          text='black'
          logo="images/svgs/logo.svg"
          icons={[
            {
              target: "./flights",
              key: "flight",
              url: "images/svgs/flight.svg",
              text: "Find Flights",
            },
            {
              target: "./hotels",
              text: "Find Stays",
              key: "hotel",
              url: "images/svgs/stay.svg",
            },
          ]}
        />
        <Banner image="images/flights.jpg">
          <Overlay
            size="4rem"
            align="left"
            right="50rem"
            heading="Make your travel wishlist, we'll do the rest"
            subTitle="Special offers to fit your plan"
          />
        </Banner>
      </Header>
      <FlightPlan />
      <Places />
      <Locations />
      <Explore />
      <Footer />
    </FlightContext>
  );
};

export default Flights;