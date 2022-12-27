import { useRouter } from "next/router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../model/Product";
import Image from "next/image";
import { Categories } from "../../components/Categories";
import { AboutUs } from "../../components/AboutUs";
import { Button } from "../../components/Button";
import Link from "next/link";

export default function Category() {
  const router = useRouter();
  const { category } = router.query;
  const products = useProducts();

  const categoryProducts: Array<Product> = products.filter((product) => {
    if (product.category === category) {
      return product;
    }
  });

  return (
    <div>
      <Header />
      <main>
        <div className="bg-almost-black">
          <div className="h2 m-auto flex w-full max-w-screen-xl justify-center border-t border-gray-400/20 py-24 text-white">
            {category}
          </div>
        </div>
        <div className="my-8 flex flex-col gap-32 px-6 md:px-10 lg:gap-40">
          {categoryProducts.map((product, index) => (
            <div
              className="m-auto flex max-w-screen-xl gap-8 max-lg:flex-col sm:gap-12 lg:gap-32"
              key={product.slug}
            >
              <div
                className={`${
                  index % 2 === 0 ? "lg:order-first" : "lg:order-last"
                } relative flex h-[350px] w-full items-center rounded-lg bg-middle-grey lg:h-[560px]`}
              >
                <Image
                  src={`/${product.image.desktop}`}
                  alt=""
                  fill
                  className="m-auto hidden rounded-lg object-contain lg:block"
                />
                <Image
                  src={`/${product.image.tablet}`}
                  alt=""
                  fill
                  className="m-auto hidden rounded-lg object-contain sm:max-lg:block"
                />
                <Image
                  src={`/${product.image.mobile}`}
                  alt=""
                  fill
                  className="m-auto rounded-lg object-contain sm:hidden"
                />
              </div>
              <div className="flex flex-col justify-center gap-6 sm:gap-4">
                {product?.new && (
                  <div className="overline-font text-sepia max-lg:text-center">
                    new product
                  </div>
                )}

                <div className="flex flex-col gap-6 sm:gap-8 lg:items-start">
                  <div className="h4 lg:h2 tracking-wider max-lg:text-center">
                    {product?.name}
                  </div>
                  <div className="body-font opacity-50 max-lg:text-center">
                    {product?.description}
                  </div>
                  <Link href={`/product/${product.slug}`}>
                    <Button>see product</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="my-32">
          <Categories />
        </div>
        <div className="my-8">
          <AboutUs />
        </div>
      </main>
      <Footer />
    </div>
  );
}
