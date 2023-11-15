import styled from "styled-components";

export const ProductCard = styled.div`
  width: 420px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 13%);
  background-color: #fff;
  position: relative;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export const ProductCard__info = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ProductCard__title_wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  width: 100%;
  gap: 12px;
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const ProductCard__title = styled.h2`
  font-size: ${(props) => props.theme.font.default};
  font-weight: 400;
  color: #000;
  flex: 1;
`;

export const ProductCard__price = styled.span`
  background-color: #373737;
  font-size: ${(props) => props.theme.font.default};
  color: #fff;
  padding: 8px 12px;
  border-radius: 5px;
  width: fit-content;
  font-weight: 700;
  font-weight: bold;
  font-size: 19px;

  @media (min-width: 768px) {
    background: transparent;
    color: #000;
    padding: 0;
  }
`;

export const ProductCard__quant_wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  border: 1px solid #bfbfbf;
  border-radius: 4px;
  justify-content: space-around;
  color: #000;
  font-weight: 400;
  margin-left: 20px;
`;
export const TitleCard = styled.div`
flex-direction: column;
width: 130px;
height: 100px;
color: #000;

`;
export const Span = styled.div`
margin-top: 10px;
 margin-left: 20px;
  margin-bottom: 8px;

`;

 

export const ProductCart__quant_value = styled.span`
  font-size: 22px;
  padding: 5px;
  margin-left: 10px;
`;

export const ProductCart__quant_btn = styled.button`
  font-size: 22px;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
 
`;

export const ProductCard__remove_item_btn = styled.span`
  display: flex;
  background-color: #193153;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
 // background-color: #000;
  color: #fff;
  color: #ffff;
  font-size: 22px !important;
  border: none;
  border-radius: 20%;
  width: 25px;
  height: 28px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;
