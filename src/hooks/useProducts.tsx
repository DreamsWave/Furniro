import { getProducts } from "@/products";
import { Product } from "@/types";
import { useState, useEffect } from "react";

interface UseProductsProps {
  count?: number;
  from?: number;
}
const useProducts = ({ count, from }: UseProductsProps = {}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const finalProducts = await getProducts({ count, from });
      setProducts(finalProducts);
    }
    loadProducts();
  }, [count, from]);
  return products;
};

export default useProducts;
