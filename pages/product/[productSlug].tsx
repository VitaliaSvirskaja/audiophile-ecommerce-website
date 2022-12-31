import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Product } from "../../model/Product";
import { Header } from "../../components/Header";
import { InTheBox } from "../../components/InTheBox";
import { Recos } from "../../components/Recos";
import { Footer } from "../../components/Footer";
import { ProductDetailHero } from "../../components/ProductDetailHero";
import { AboutUs } from "../../components/AboutUs";
import { ProductImages } from "../../components/ProductImages";
import { Categories } from "../../components/Categories";

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

      <main className="px-6 sm:px-10 ">
        <div className="m-auto my-7 max-w-screen-xl sm:my-8 lg:mt-20 lg:mb-24">
          <button
            onClick={() => router.back()}
            className="body-font opacity-50 hover:text-sepia"
          >
            Go Back
          </button>
        </div>
        <ProductDetailHero product={data} />
        <div className="m-auto my-20 flex max-w-screen-xl gap-10 max-lg:flex-col sm:my-32 sm:gap-28 lg:my-40 lg:justify-between">
          <div className="flex flex-col gap-6 sm:gap-8 lg:max-w-2xl">
            <p className="h3">Features</p>
            <p className="body-font break-all opacity-50">{features?.[0]}</p>
            <p className="body-font break-all opacity-50">{features?.[1]}</p>
          </div>
          <InTheBox includedItems={data?.includes} />
        </div>
        <div>
          <ProductImages galleryImages={data?.gallery} />
        </div>
        <div className="my-32 lg:my-40">
          <Recos recommendations={data?.others} />
        </div>
        <div>
          <Categories />
        </div>
        <div className="my-32 lg:my-40">
          <AboutUs />
        </div>
      </main>
      <Footer />
    </div>
  );
}
