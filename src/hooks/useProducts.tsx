import { getProducts } from "@/products";
import { Product } from "@/types";
import { getImageUrl } from "@/utils";
import { useState, useEffect } from "react";

const useProducts = ({ count, from }: { count: number; from?: number }) => {
  const [products, setProducts] = useState<Product[]>([]);

  function updateProductsImagePaths(products: Product[]) {
    const updatedProducts = products.map((product) => {
      return {
        ...product,
        image: getImageUrl(product.image, "furniture"),
      };
    });
    return updatedProducts;
  }

  useEffect(() => {
    async function loadProducts() {
      const finalProducts = await getProducts({ count, from });
      const updatedProducts = updateProductsImagePaths(finalProducts);
      setProducts(updatedProducts);
    }
    loadProducts();
  }, [count, from]);
  return products;
};

export default useProducts;
