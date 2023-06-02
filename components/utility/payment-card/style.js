import styled from "styled-components";

export const PaymentWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 5rem 8rem;
  display: flex;
  gap: 5rem;
  margin-top: 6.5rem;
`;

export const PaymentLeft = styled.div`
  width: 790px;
  height: 790px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

export const PaymentRight = styled.div`
  width: 350px;
  height: 350px;
`;

export const PaymentCard = styled.div`
  width: 790px;
  height: 350px;
  background: #fff;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  box-shadow: 0 0 8px rgba(17, 34, 17, 0.05);
`;

export const PaymentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const PaymentTitle = styled.h2`
  font-size: ${(props) => (props.size ? props.size : "35px")};
  margin-bottom: 0.3rem;
`;

export const PaymentAmount = styled.h2`
  font-size: ${(props) => (props.size ? props.size : "40px")};
  color: #ff8682;
`;

export const PaymentTime = styled.p`
  font-size: ${(props) => (props.size ? props.size : "18px")};
`;

export const PaymentSubTitle = styled.p`
  font-size: ${(props) => (props.size ? props.size : "18px")};
`;

export const PaymentFooter = styled.div`
  width: 100%;
  height: auto;
`;

export const PaymentFooterSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 9rem;
  align-items: center;
`;

export const VerticalLine = styled.div`
  width: 5px;
  height: 50px;
  position: absolute;
  background: var(--grey);
  margin: 0 1rem;
  left: ${props => props.left || 0};
`;

export const PaymentFooterLogo = styled.img`
  width: 64px;
  height: 45px;
`;

export const PaymentFooterLeft = styled.div`
  width: ${(props) => props.width || "auto"};
  height: 54px;
  display: ${(props) => props.display || "block"};
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export const PaymentFooterCard = styled.div`
  width: 262px;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  gap: 2rem;
`;

export const PaymentFooterIcons = styled.div`
  width: ${(props) => props.width || "360px"};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const PaymentFooterIcon = styled.img`
  width: ${(props) => props.width || "20px"};
  height: ${(props) => props.width || "20px"};
`;
