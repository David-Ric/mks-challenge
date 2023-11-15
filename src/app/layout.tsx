import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeWrapper } from "@/styles/ThemeWrapper";
import Providers from "@/services/providers";
import { CartProvider } from "@/contexts/cartContext";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "MKS - Shopping",
  description: "Seu Eletro em suas mãos",
 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={montserrat.className}>
        <Providers>
          <CartProvider>
            <ThemeWrapper>{children}</ThemeWrapper>
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}