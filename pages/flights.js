import Locations from "../components/flight-page/locations"
import Places from "../components/flight-page/places"
import { FlightPlan } from "../components/landing-page"
import LandingContext from "../context/landing-page"
import Layout from "../layout"
import Explore from "../components/flight-page/locations/explore"

const Flights = ()=>{
    return(
        <LandingContext>
            <Layout>
                <FlightPlan />
                <Places />
                <Locations />
                <Explore />
            </Layout>
        </LandingContext>
    )
}

export default Flights