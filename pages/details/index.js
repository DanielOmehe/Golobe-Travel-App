import { Header, NavBar, Footer } from "../../layout";
import { FlightContext } from "../../context";
import BookingDetails from '../../components/flight-page/booking-details'
import BookingNav from "../../components/flight-page/booking-details/header";
import FlightCard from "../../components/flight-page/booking-details/flight-card";
import FlightCardHead from "../../components/flight-page/booking-details/flight-card";
import FlightTicket from "../../components/flight-page/booking-details/flight-ticket";
import FlightTerms from "../../components/flight-page/booking-details/flight-terms";

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
          <FlightTerms 
          title='Terms and Conditions'
          subtitle='Payments'
          terms={[
            {
                text: 'If you are purchasing your ticket using a debit or credit card via the Website, we will process these payments via the automated secure common payment gateway which will be subject to fraud screening purposes.',
                
            },
            {
                text: 'If you do not supply the correct card billing address and/or cardholder information, your booking will not be confirmed and the overall cost may increase. We reserve the right to cancel your booking if payment is declined for any reason or if you have supplied incorrect card information. If we become aware of, or is notified of, any fraud or illegal activity associated with the payment for the booking, the booking will be cancelled and you will be liable for all costs and expenses arising from such cancellation, without prejudice to any action that may be taken against us.',
            },
            {
                text: 'Golobe may require the card holder to provide additional payment verification upon request by either submitting an online form or visiting the nearest Golobe office, or at the airport at the time of check-in. Golobe reserves the right to deny boarding or to collect a guarantee payment (in cash or from another credit card) if the card originally used for the purchase cannot be presented by the cardholder at check-in or when collecting the tickets, or in the case the original payment has been withheld or disputed by the card issuing bank. Credit card details are held in a secured environment and transferred through an internationally accepted system. ',
                
            },
        ]}
          />
      </BookingDetails>
      <Footer />
    </FlightContext>
  );
};

export default Flights;