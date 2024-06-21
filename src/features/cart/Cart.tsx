import type { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProduct,
} from "./cartSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { getProducts } from "@/products";
import { Product } from "@/types";
import { getDiscountedPrice } from "@/utils";
import InputNumber from "@/components/InputNumber";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const loadedProducts = await getProducts({
        ids: cartProducts.map((product) => product.productId),
      });
      setProducts(loadedProducts);
    }
    loadProducts();
  }, [cartProducts]);

  return (
    <section>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.length > 0 &&
              products.map((product) => {
                const quantity =
                  cartProducts.find(
                    (cartProduct) => cartProduct.productId === product.id,
                  )?.quantity || 1;
                const price = product.discountPercent
                  ? getDiscountedPrice(product.price, product.discountPercent)
                  : product.price;

                return (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      <Link
                        to={`/product/${product.id}`}
                        className="flex overflow-hidden rounded-lg"
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-[75px] w-full object-cover"
                        />
                      </Link>
                    </TableCell>
                    <TableCell className="font-medium">
                      <Link
                        to={`/product/${product.id}`}
                        className="font-poppins text-base text-text-color-400 hover:text-primary"
                      >
                        {product.title}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {product.currency} {price}
                    </TableCell>
                    <TableCell>
                      <InputNumber
                        small
                        showButtonsOnHover
                        min={0}
                        defaultNumber={quantity}
                        onValueChange={(value) => {
                          if (value > quantity) {
                            dispatch(increaseProductQuantity(product.id));
                          } else if (value < quantity) {
                            dispatch(decreaseProductQuantity(product.id));
                          }
                          if (value <= 0) {
                            dispatch(removeProduct(product.id));
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell className="text-right">
                      {product.currency} {quantity * price}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Cart;
