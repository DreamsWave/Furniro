import { RootState } from "@/store";
import { getDiscountedPrice } from "@/utils";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Product } from "@/types";
import { getProducts } from "@/products";

const ProductsTotal = () => {
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);

  const getTotalPrice = useCallback(
    (products: Product[]) => {
      let total = 0;
      products.forEach((product) => {
        const price = products.find((p) => p.id === product.id)?.price || 0;
        const discountPercent =
          products.find((p) => p.id === product.id)?.discountPercent || 0;
        const discountedPrice = getDiscountedPrice(price, discountPercent);
        const quantity =
          cartProducts.find((p) => p.productId === product.id)?.quantity || 0;
        total += discountedPrice * quantity;
      });
      return total;
    },
    [cartProducts],
  );

  useEffect(() => {
    async function loadProducts() {
      const loadedProducts = await getProducts({
        ids: cartProducts.map((product) => product.productId),
      });
      setProducts(loadedProducts);
      setTotalPrice(getTotalPrice(loadedProducts));
    }
    loadProducts();
  }, [cartProducts, getTotalPrice]);

  return (
    <div className="mt-10 flex flex-col space-y-5 border-b-[1px] border-[#d9d9d9] pb-8">
      <div className="flex justify-between font-poppinsMedium text-2xl">
        <h3>Product</h3>
        <h3>Subtotal</h3>
      </div>
      <div className="flex flex-col space-y-5">
        {products.map((product) => {
          const quantity =
            cartProducts.find((prod) => prod.productId === product.id)
              ?.quantity || 1;
          return (
            <div key={product.id} className="flex justify-between">
              <div className="space-x-2">
                <span className="font-poppins text-base text-text-color-400">
                  {product.title}
                </span>
                <span className="font-poppinsMedium text-xs text-text-color">
                  x {quantity}
                </span>
              </div>
              <div className="font-poppinsLight text-base text-text-color">
                {product.currency}{" "}
                {getDiscountedPrice(
                  product.price,
                  product.discountPercent || 0,
                ) * quantity}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between">
        <span className="font-poppins text-base text-text-color">Subtotal</span>
        <div className="font-poppinsLight text-base text-text-color">
          {products[0]?.currency || ""} {totalPrice}
        </div>
      </div>
      <div className="flex justify-between">
        <span className="font-poppins text-base text-text-color">Total</span>
        <div className="font-poppinsBold text-2xl text-primary">
          {products[0]?.currency || ""} {totalPrice}
        </div>
      </div>
    </div>
  );
};

export default ProductsTotal;
