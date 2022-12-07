import Head from "next/head";
import { Header } from "../components/Header";
import { Herosection } from "../components/Herosection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Audiophile eCommerce</title>
        <meta name="description" content="Audio gear by audiophile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Herosection />
      </main>
      <Footer />
    </div>
  );
}
