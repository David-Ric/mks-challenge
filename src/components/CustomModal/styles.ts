import styled from "styled-components";

export const Modal = styled.button`
 width: 100vw;
 height: 135vh;
 position: absolute;
 top: 0;
 z-index: 1000;
 margin: auto;
 background-color: rgba(0, 0, 0, 0.5); 
 opacity: 0.7;
 @media (max-width: 768px) {
    width: 100%;
 height: 135vh;
 border: none;
  }
`;

export const Modal_Content = styled.button`
 width: 300px;
 height: 200px;
 position: absolute;
 top: 300px;
 z-index: 1000;
 border-radius: 10px;
 margin: auto;
 box-shadow: 10px 0 10px 10px rgba(0, 0, 0, 0.5);
 left: 40%;
 opacity: 1000;
 @media (max-width: 768px) {
    left: 10%;
  }
`;
export const Button = styled.button`
 width: 90px;
 height: 40px;
 background-color: rgba(0, 0, 0, 0.8);
 margin-top: 10px;
 color: #ffff;
 border-radius: 6px;
 box-shadow: 10px 0 10px 10px rgba(0, 0, 0, 0.5);
 cursor: pointer;
`;