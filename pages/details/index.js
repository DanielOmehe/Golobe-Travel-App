import { Header, NavBar, Footer } from "../../layout";
import { FlightContext } from "../../context";
import BookingDetails from '../../components/flight-page/booking-details'
import BookingNav from "../../components/flight-page/booking-details/header";
import FlightCard from "../../components/flight-page/booking-details/flight-card";
import FlightCardHead from "../../components/flight-page/booking-details/flight-card";
import FlightTicket from "../../components/flight-page/booking-details/flight-ticket";

const Flights = () => {
  return (
    <FlightContext>
        <NavBar
          background="white"
          text='black'
          logo="images/svgs/logo.svg"
          icons={[
            {
              target: "./flights",
              key: "flight",
              url: "images/svgs/flight.svg",
              text: "Find Flights",
            },
            {
              target: "./hotels",
              text: "Find Stays",
              key: "hotel",
              url: "images/svgs/stay.svg",
            },
          ]}
        />
      <BookingDetails>
          <BookingNav />
          <FlightCardHead 
            title='Emirates A380 Airbus'
            subtitle='Gümüşsuyu Mah. Inonu Cad. No:8, Istanbul 34437'
            price='$240'
          />
          <FlightTicket 
          time='12:00 pm'
          destination='Newark[EWR]'
          name='James Doe'
          pass="Boarding Pass N'123"
          Class='Business class'
          letter='EK'
          number='ABC12345'
          ticketInfos={[
            {
                title: 'Date',
                subtitle: 'Newark(EWR)',
                icon: 'images/svgs/calender.svg',
            },
            {
                title: 'Flight Time',
                subtitle: '12:00',
                icon: 'images/svgs/clock.svg',
            },
            {
                title: 'Gate',
                subtitle: 'A12',
                icon: 'images/svgs/gate.svg',
            },
            {
                title: 'Seat',
                subtitle: '128',
                icon: 'images/svgs/seat.svg',
            },
        ]}
          />
      </BookingDetails>
      <Footer />
    </FlightContext>
  );
};

export default Flights;