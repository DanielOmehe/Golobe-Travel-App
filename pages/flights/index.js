import { Header, Banner, NavBar, Footer } from "../../layout";
import { Overlay } from "../../components/utility";
import { FlightContext } from "../../context";

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
              url: "images/flight.svg",
              text: "Find Flights",
            },
            {
              target: "./hotels",
              text: "Find Stays",
              key: "hotel",
              url: "images/stay.svg",
            },
          ]}
        />
        <Banner image="images/flights.jpg">
          <Overlay
            size="4rem"
            align="left"
            right="50rem"
            heading="Make you travel wishlist, we'll do the rest"
            subTitle="Special offers to fit your plan"
          />
        </Banner>
      </Header>
      <h1> This is the flights page </h1>
      <Footer />
    </FlightContext>
  );
};

export default Flights;