import styled from "styled-components";

export const Cart__btn_wrapper = styled.div`
  width: 90px;
  height: 45px;
justify-content: center;
font-size: 18;
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  color: #000;
  font-size: ${(props) => props.theme.font.default};
  font-weight: 700;
  gap: ${(props) => props.theme.font.default};
  cursor: pointer;
  
`;

export const Cart__content_wrapper = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  min-width: 500px;
  height: 100vh;
  box-shadow: -10px 0 10px -10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  right: 0;
  animation: showCartMenu 0.3s forwards;
  
  @media (max-width: 768px) {
    min-width: 100vw;
  }

  @keyframes showCartMenu {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: initial;
    }
  }
  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const Cart__content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
`;

export const Cart__Products_wrapper = styled.div`
  height: 500px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  overflow: auto;
  justify-content: center;
  align-items: flex-start;
  &::-webkit-scrollbar {
    width: 8px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: lightblue;
  }
    border-radius: 4px; 
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    gap: 20px;
    max-height: 630px;
    flex: 1;
  }
`;

export const Cart__content_header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Cart__title = styled.h3`
  font-size: 27px;
  color: #fff;
  font-weight: 700;
  width: 70%;
`;

export const Cart__close_btn = styled.button`
  background-color: #193153;
 // box-shadow: 4px 3px 10px #000;
  color: ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.font.big};
  font-weight: 200;
  color: #ffff;
  font-size: 22px !important;
  border: none;
  border-radius: 20%;
  width: 28px;
  height: 30px;
  cursor: pointer;
`;

export const Cart__total_wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export const Cart__total = styled.span`
  font-size: ${(props) => props.theme.font.default};
  color: #fff;
  font-weight: 700;
`;

export const Cart__total_finishPurchase_btn = styled.button`
  background-color: #000;
  padding: 12px;
  text-align: center;
  font-size: ${(props) => props.theme.font.default};
  font-weight: 700;
  color: #fff;
  border: none;
  width: 100%;
  cursor: pointer;
`;
