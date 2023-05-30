import Header from "../layout/header";
import Footer from "../layout/footer";
import { FlightPlan, Places, Banners, Reviews, } from "../components/landing-page";
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
