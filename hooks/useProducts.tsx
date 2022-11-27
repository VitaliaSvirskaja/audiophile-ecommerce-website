import { useEffect, useState } from "react";
import { Product } from "../model/Product";

export function useProducts(): Array<Product> {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    async function fetchProducts(): Promise<void> {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return products;
}
