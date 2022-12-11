import Head from "next/head";
import { Header } from "../components/Header";
import { Herosection } from "../components/Herosection";
import { Footer } from "../components/Footer";
import { Categories } from "../components/Categories";

export default function Home() {
  return (
    <div className="flex h-screen flex-col overflow-y-auto">
      <Head>
        <title>Audiophile eCommerce</title>
        <meta name="description" content="Audio gear by audiophile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-1">
        <Herosection />
        <Categories />
      </main>
      <Footer />
    </div>
  );
}
