import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Herosection } from "../components/Herosection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Audiophile eCommerce</title>
        <meta name="description" content="Audio gear by audiophile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="h-screen">
        <div className="px-40 h-fit bg-almost-black flex justify-center">
          <Herosection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
