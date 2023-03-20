import Header from "../components/header"
import NavBar from "../components/header/navbar"
import Banner from "../components/header/banner"
import FlightPlan from "../components/flight_plan"
import Main from "../components/landing-page/main"
import Places from "../components/landing-page/main/places"
import Booking from "../components/landing-page/main/booking"
import Reviews from '../components/landing-page/main/reviews';
import { bookings } from "../components/data/booking"
import { reviews } from '../components/data/reviews'
import Footer from '../components/footer'
import Newsletter from '../components/footer/newsletter/index'
import Navigations from '../components/footer/navigations'
import Logo from "../components/footer/logo";
import Review from "../components/landing-page/main/review"

const LandingPage = ()=>{
    return(
        <>
            <Header variant='landing-page-header'>
                <NavBar variant='landing-page-navbar'/>
                <Banner />
            </Header>
            <Main variant='landing-page-main'>
                <FlightPlan variant='landing-page-flight-plan'/>
                <Places />
                <Booking bookings={bookings} />
                <Reviews>
                    
                </Reviews>
            </Main>
            <Footer>
                <Newsletter />
                <Navigations>
                    <Logo />
                </Navigations>
            </Footer>
        </>
    )
}

export default LandingPage