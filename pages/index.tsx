import Head from "next/head";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Audiophile eCommerce</title>
        <meta name="description" content="Audio gear by audiophile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="h-full">
        <div className="flex h-fit justify-center bg-almost-black px-40">
          {/*<Herosection />*/}
        </div>
      </main>
      {/*<Footer />*/}
    </div>
  );
}
