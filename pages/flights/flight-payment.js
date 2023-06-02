import { Header, Footer, NavBar } from "../../layout";
import Payment from '../../components/utility/payment-card'

const FlightPayment = () => {
  return (
    <>
      <Header height='auto'>
        <NavBar
          background="white"
          text="black"
          logo="../images/svgs/logo.svg"
          shadow={true}
          icons={[
            {
              target: "./",
              key: "flight",
              url: "../images/svgs/flight.svg",
              text: "Find Flights",
            },
            {
              target: "./",
              text: "Find Stays",
              key: "hotel",
              url: "../images/svgs/stay.svg",
            },
          ]}
        />
      </Header>
      <Payment info={{
        title: 'Emirates A380 Airbus',
        subtitle: 'Return Wed, Dec 14',
        amount: 240,
        time: '2h 28m',
        logo: '/images/emirates.png',
        footerTitle: 'Emirates',
        footerSubTitle: 'A380 Airbus',
        digit: '12:00pm',
        local: 'Newark(EWR)',
        icons: [
          '../images/svgs/flight.svg',
          '../images/svgs/wifi.svg',
          '../images/svgs/stopwatch.svg',
          '../images/svgs/fastfood.svg',
          '../images/svgs/seat.svg'
        ],
        footicons: [
          '../images/svgs/left.svg',
          '../images/svgs/flight.svg',
          '../images/svgs/right.svg',
        ]
      }} />
      <Footer logo="../images/Logo.png" />
    </>
  );
};

export default FlightPayment;
