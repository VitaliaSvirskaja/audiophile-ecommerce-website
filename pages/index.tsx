import Head from "next/head";
import { Header } from "../components/Header";
import { Herosection } from "../components/Herosection";
import { Footer } from "../components/Footer";
import { Categories } from "../components/Categories";
import { AboutUs } from "../components/AboutUs";
import { Highlights } from "../components/Highlights";

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
        <div
          className="pb-28 pt-20
         sm:py-24 lg:py-32 "
        >
          <Categories />
        </div>
        <div>
          <Highlights />
        </div>
        <div className="py-28 sm:py-24 lg:py-52">
          <AboutUs />
        </div>
      </main>
      <Footer />
    </div>
  );
}
