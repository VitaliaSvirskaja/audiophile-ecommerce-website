import Head from "next/head";
import { useProducts } from "../hooks/useProducts";

export default function Home() {
  const products = useProducts();

  const productNames = products.map((product) => product.name);

  return (
    <div>
      <Head>
        <title>Audiophile eCommerce</title>
        <meta name="description" content="Audio gear by audiophile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>
        {productNames.map((productName: string) => {
          return <li key={productName}>{productName}</li>;
        })}
      </p>
    </div>
  );
}
