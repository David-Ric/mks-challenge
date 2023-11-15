import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/contexts/cartContext";
import Image from "next/image";
import * as S from "./styles";
import ProductCartItem from "../ProductCartItem";
import CustomModal from "../CustomModal";

export default function Card() {
  const { currentCartItems, cartTotal, setCartTotal } =
    useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);
  const openCloseCartMenu = () => {
    setIsOpen(!isOpen);
  };
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  function handleClose() {
    setShowModal(false);
    window.scrollTo(0, 0);
    window.location.reload();
  }
  function endPurchase() {
    window.scrollTo(0, 0);
    handleShow();
    openCloseCartMenu();
  }

  return (
    <>
      <S.Cart__btn_wrapper onClick={openCloseCartMenu}>
        <Image
          src={"/images/cart.svg"}
          width={19.1}
          height={18}
          alt="cart icon"
        />
        <span>{currentCartItems?.length}</span>
      </S.Cart__btn_wrapper>

      {isOpen && (
        <S.Cart__content_wrapper>
          <S.Cart__content>
            <S.Cart__content_header>
              <S.Cart__title>Carrinho de compras</S.Cart__title>

              <S.Cart__close_btn onClick={openCloseCartMenu}>
                X
              </S.Cart__close_btn>
            </S.Cart__content_header>

            <S.Cart__Products_wrapper>
              {currentCartItems?.map((cartItem, index) => {
                return (
                  <ProductCartItem
                    key={`${cartItem.name}_${index}`}
                    ProductData={cartItem}
                    currentCartItemIndex={index}
                  />
                );
              })}
            </S.Cart__Products_wrapper>
          </S.Cart__content>

          <S.Cart__total_wrapper>
            <S.Cart__total>Total: </S.Cart__total>
            <S.Cart__total>R$ {cartTotal}</S.Cart__total>
          </S.Cart__total_wrapper>
          <S.Cart__total_finishPurchase_btn
            onClick={() => {
              if (cartTotal > 0) {
                endPurchase();
              } else {
                openCloseCartMenu();
              }
            }}
          >
            Finalizar Compra
          </S.Cart__total_finishPurchase_btn>
        </S.Cart__content_wrapper>
      )}
      <CustomModal
        show={showModal}
        handleClose={handleClose}
        title="Título do Modal"
        content={
          <>
            <h2>Seu Pedido foi finalizado</h2>
          </>
        }
      />
    </>
  );
}
