import Header from "../layout/header"
import { FlightPlan } from '../components/landing-page';
import SectionTitle from "../components/utility/section_title";

const LandingPage = ()=>{
    return(
        <>
        <Header />
        <FlightPlan />
        <SectionTitle/>
        </>
    )
}

export default LandingPage;