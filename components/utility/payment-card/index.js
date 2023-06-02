import {
  PaymentWrapper,
  PaymentLeft,
  PaymentRight,
} from "./style";
import PaymentInfo from './payment-info';

const Payment = ({ info, details }) => {
  return (
    <PaymentWrapper>
      <PaymentLeft>
        <PaymentInfo info={info} />
      </PaymentLeft>
      <PaymentRight></PaymentRight>
    </PaymentWrapper>
  );
};

export default Payment;
