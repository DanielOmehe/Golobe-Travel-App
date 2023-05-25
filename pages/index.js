import Header from "../layout/header";
import { FlightPlan, Places, Banners } from "../components/landing-page";
import LandingContext from "../context/landing-page";

const LandingPage = () => {
  return (
    <LandingContext>
      <Header />
      <FlightPlan />
      <Places />
      <Banners />
    </LandingContext>
  );
};

export default LandingPage;
