import Header from "../layout/header";
import { FlightPlan } from "../components/landing-page";
import LandingContext from "../context/landing-page";

const LandingPage = () => {
  return (
    <LandingContext>
      <Header />
      <FlightPlan />
    </LandingContext>
  );
};

export default LandingPage;
