"use client";
import * as S from "./styles";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import Card from "../Card";

export default function Header() {
  return (
    <S.Header>
      <Container>
        <S.Header_wrapper>
          <S.Header_logo>
            <Link href="/">
              <Image
                src={"/images/logoMKS.png"}
                width={80}
                height={40}
                alt="cart icon"
              />
            </Link>
            <span>Shopping</span>
          </S.Header_logo>

           <Card />
        </S.Header_wrapper>
      </Container>
    </S.Header>
  );
}
