import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Product } from "../../model/Product";
import { Header } from "../../components/Header";
import { InTheBox } from "../../components/InTheBox";
import { Recos } from "../../components/Recos";
import { Footer } from "../../components/Footer";

export default function ProductComponent() {
  const router = useRouter();
  const { productSlug } = router.query;
  const [data, setData] = useState<Product>();

  const features = data?.features.split("\n\n");
  console.log(features);

  useEffect(() => {
    fetch("/api/products/" + productSlug)
      .then((response) => response.json())
      .then(setData);
  }, [productSlug]);

  return (
    <div>
      <Header />
      <main className="px-6 sm:px-10">
        <p className="m-auto max-w-screen-xl">{data?.name}</p>
        <div className="m-auto flex max-w-screen-xl gap-10 max-lg:flex-col sm:gap-28 lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-6 sm:gap-8">
            <p className="h3">Features</p>
            <p className="body-font break-all opacity-50">{features?.[0]}</p>
            <p className="body-font break-all opacity-50">{features?.[1]}</p>
          </div>
          <InTheBox includedItems={data?.includes} />
        </div>
        <div className="my-4">
          <Recos recommendations={data?.others} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
