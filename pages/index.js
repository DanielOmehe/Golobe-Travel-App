import Header from "../layout/header";
import { FlightPlan, Places } from "../components/landing-page";
import LandingContext from "../context/landing-page";

const LandingPage = () => {
  return (
    <LandingContext>
      <Header />
      <FlightPlan />
      <Places />
    </LandingContext>
  );
};

export default LandingPage;
