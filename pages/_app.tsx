import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope } from "@next/font/google";
import { CartContextProvider } from "../context/CartContext";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={manrope.className}>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </div>
  );
}
