import Layout from "../layout";
import {
  FlightPlan,
  Places,
  Banners,
  Reviews,
} from "../components/landing-page";
import LandingContext from "../context/landing-page";

const LandingPage = () => {
  return (
    <LandingContext>
      <Layout>
        <FlightPlan />
        <Places />
        <Banners />
        <Reviews />
      </Layout>
    </LandingContext>
  );
};

export default LandingPage;
