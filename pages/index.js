import Header from "../layout/header";
import { FlightPlan } from "../components/landing-page";
import SectionTitle from "../components/utility/section_title";
import LandingContext from "../context/landing-page";

const LandingPage = () => {
  return (
    <LandingContext>
      <Header />
      <FlightPlan />
      <SectionTitle />
    </LandingContext>
  );
};

export default LandingPage;
