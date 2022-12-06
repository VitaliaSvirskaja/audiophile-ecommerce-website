import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Product } from "../../model/Product";
import { Header } from "../../components/Header";

export default function ProductComponent() {
  const router = useRouter();
  const { productID } = router.query;
  const [data, setData] = useState<Product>();

  useEffect(() => {
    fetch("/api/products/" + productID)
      .then((response) => response.json())
      .then(setData);
  }, [productID]);

  return (
    <div>
      <Header />
      {data?.name}
    </div>
  );
}
