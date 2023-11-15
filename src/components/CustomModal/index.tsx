import React from "react";
import { Modal, Button } from "react-bootstrap";
import * as S from "./styles";
import Image from "next/image";
interface CustomModalProps {
  show: boolean;
  handleClose: () => void;
  title: string;
  content: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  show,
  handleClose,
  title,
  content,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <S.Modal>
        <S.Modal_Content>
          <Modal.Header closeButton>
            {/* <Modal.Title>{title}</Modal.Title> */}
          </Modal.Header>
          <Image
          src={"/images/logoMKSblue.png"}
          width={130}
          height={80}
          style={{marginBottom:10}}
          alt="cart icon"
        />
          <Modal.Body>{content}</Modal.Body>
          <Modal.Footer>
            <S.Button onClick={handleClose}>
              Fechar
            </S.Button>
          </Modal.Footer>
        </S.Modal_Content>
      </S.Modal>
    </Modal>
  );
};

export default CustomModal;
