import Button from "@/components/Button";
import { getProducts } from "@/products";
import { RootState } from "@/store";
import { Product } from "@/types";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Comparison = () => {
  const comparisonProducts = useSelector(
    (state: RootState) => state.comparison.products,
  );
  const [products, setProducts] = useState<Product[]>([]);
  // const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const loadedProducts = await getProducts({
        ids: comparisonProducts.map((product) => product.productId),
      });
      setProducts(loadedProducts);
    }
    loadProducts();
  }, [comparisonProducts]);

  if (products.length === 0)
    return (
      <section className="container flex flex-col items-center py-8">
        <h3 className="mb-6 text-2xl">Cart is empty</h3>
        <Button linkTo="/shop">Show Products</Button>
      </section>
    );
  return <section></section>;
};

export default Comparison;
