import { Header, Footer, Banner, NavBar } from "../layout";
import {
  FlightPlan,
  Places,
  Banners,
  Reviews,
} from "../components/landing-page";
import { LandingContext } from "../context";
import { Overlay } from "../components/utility";

const LandingPage = () => {
  return (
    <LandingContext>
      <Header>
        <NavBar
          color="black"
          logo="images/navbarLogo.png"
          icons={[
            {
              target: "./flights",
              key: "flight",
              url: "images/svgs/airplane.svg",
              text: "Find Flights",
            },
            {
              target: "./hotels",
              text: "Find Stays",
              key: "hotel",
              url: "images/svgs/bed.svg",
            },
          ]}
        />
        <Banner>
          <Overlay
            title="Live & Travel"
            subTitle="Special offers to suit your plan"
            heading="Helping Others"
          />
        </Banner>
      </Header>
      <FlightPlan />
      <Places />
      <Banners />
      <Reviews />
      <Footer logo='images/Logo.png' />
    </LandingContext>
  );
};

export default LandingPage;
