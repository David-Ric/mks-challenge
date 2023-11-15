"use client";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/contexts/cartContext";
import Image from "next/image";
import * as S from "./styles";

type ProductProps = {
  productData: {
    brand: string;
    createdAt: string;
    description: string;
    id: number;
    name: string;
    photo: string;
    price: number;
    updatedAt: string;
    amount: number;
  };
  currentCartItemIndex: number;
};

export default function ProductCartItem({ ProductData }: ProductProps) {
  const {
    currentCartItems = [],
    setCurrentCartItems,
    setCartTotal,
  } = useContext(GlobalContext) || {};

  const [ProductQuantity, setProductQuantity] = useState(1);
  let total = 0;

  const increaseProductAmountOnCart = () => {
    ProductData.amount += 1;
    setProductQuantity(ProductData.amount);

    currentCartItems.map((item) => {
      total += Number(item.price * item.amount);
    });
    setCartTotal(total);
  };

  const decreaseProductAmountOnCart = () => {
    ProductData.amount -= 1;
    setProductQuantity(ProductData.amount);

    currentCartItems.map((item) => {
      total += Number(item.price * item.amount);
    });
    setCartTotal(total);

    if (ProductData.amount === 0) {
      setCurrentCartItems(
        currentCartItems.filter((item) => item.id !== ProductData.id)
      );
    }
  };

  const removeProductFromCart = () => {
    currentCartItems.map((item) => {
      total += Number(item.price * item.amount);
    });
    setCartTotal(total);

    setCurrentCartItems(
      currentCartItems.filter((item) => item.id !== ProductData.id)
    );
  };

  return (
    <S.ProductCard>
      <S.ProductCard__remove_item_btn onClick={removeProductFromCart}>
        X
      </S.ProductCard__remove_item_btn>
      <S.ProductCard__info>
        <Image
          src={ProductData.photo}
          width={100}
          height={100}
          alt="imagem do produto: "
        />
        <S.ProductCard__title>{ProductData.name}</S.ProductCard__title>

        <S.ProductCard__title_wrapper>
          <S.TitleCard>
            <S.Span>Qtd.:</S.Span>
            <S.ProductCard__quant_wrapper>
              <S.ProductCart__quant_btn
                onClick={decreaseProductAmountOnCart}
                disabled={ProductQuantity > 0 ? false : true}
              >
                -
              </S.ProductCart__quant_btn>
              <S.ProductCart__quant_value>
                {ProductQuantity}
              </S.ProductCart__quant_value>
              <S.ProductCart__quant_btn onClick={increaseProductAmountOnCart}>
                +
              </S.ProductCart__quant_btn>
            </S.ProductCard__quant_wrapper>
          </S.TitleCard>
          <S.ProductCard__price>R$ {ProductData.price}</S.ProductCard__price>
        </S.ProductCard__title_wrapper>
      </S.ProductCard__info>
    </S.ProductCard>
  );
}
