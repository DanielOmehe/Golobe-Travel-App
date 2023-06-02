import {
  PaymentCard,
  PaymentHeader,
  PaymentTitle,
  PaymentSubTitle,
  PaymentAmount,
  PaymentTime,
  PaymentFooter,
  PaymentFooterSection,
  PaymentFooterCard,
  PaymentFooterLogo,
  PaymentFooterLeft,
  PaymentFooterIcons,
  PaymentFooterIcon,
  VerticalLine,
} from "./style";
import { currencyFormatter } from "../../../functions";

const PaymentInfo = ({ info }) => {
  return (
    <PaymentCard>
      <PaymentHeader>
        <PaymentTitle>{info.title}</PaymentTitle>
        <PaymentAmount>{currencyFormatter.format(info.amount)}</PaymentAmount>
      </PaymentHeader>
      {info.subtitle ? (
        <PaymentHeader>
          <PaymentSubTitle>{info.subtitle}</PaymentSubTitle>
          <PaymentTime>{info.time}</PaymentTime>
        </PaymentHeader>
      ) : null}
      <PaymentFooter>
        <PaymentFooterSection>
          <PaymentFooterCard>
            <PaymentFooterLogo src={info.logo} />
            <PaymentFooterLeft>
              <PaymentTitle size="25px">{info.footerTitle}</PaymentTitle>
              <PaymentSubTitle size="16px">
                {info.footerSubTitle}
              </PaymentSubTitle>
            </PaymentFooterLeft>
          </PaymentFooterCard>
          <PaymentFooterIcons>
            <>
              {info.icons.map((icon, index) => (
                <PaymentFooterIcon src={icon} key={index} />
              ))}
            </>
            <>
              {[...Array(4)].map((_, index) => (
                <VerticalLine key={index} left={`${(index + 1) * 5 - 3}rem`} />
              ))}
            </>
          </PaymentFooterIcons>
        </PaymentFooterSection>
        <PaymentFooterSection>
          <PaymentFooterLeft width="120px" display="flex">
            <PaymentTitle size="16px">{info.digit}</PaymentTitle>
            <PaymentSubTitle size="14px">{info.local}</PaymentSubTitle>
          </PaymentFooterLeft>
          <PaymentFooterIcons width="150px">
            {info.footicons.map((icon) => (
              <PaymentFooterIcon src={icon} width="40px" />
            ))}
          </PaymentFooterIcons>
          <PaymentFooterLeft width="120px" display="flex">
            <PaymentTitle size="16px">{info.digit}</PaymentTitle>
            <PaymentSubTitle size="14px">{info.local}</PaymentSubTitle>
          </PaymentFooterLeft>
        </PaymentFooterSection>
      </PaymentFooter>
    </PaymentCard>
  );
};

export default PaymentInfo;
