import { Header, Banner, NavBar, Footer } from "../../layout";
import { Overlay } from "../../components/utility";
import { HotelContext } from "../../context";

const Flights = () => {
  return (
    <HotelContext>
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
        <Banner image="images/resort.jpg" position="80% 50%">
          <Overlay
            size="4rem"
            right="50rem"
            align="left"
            heading="Make you travel wishlist, we'll do the rest"
            subTitle="Special offers to fit your plan"
          />
        </Banner>
      </Header>
      <h1> This is the hotels page </h1>
      <Footer />
    </HotelContext>
  );
};

export default Flights;
