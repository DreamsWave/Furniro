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
import { useCallback, useEffect, useState } from "react";
import { getProducts } from "@/products";
import { Product } from "@/types";
import { getDiscountedPrice } from "@/utils";
import InputNumber from "@/components/InputNumber";
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import { Trash } from "lucide-react";

const Cart = () => {
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

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

  if (products.length === 0)
    return (
      <section className="container py-8">
        <h3 className="mb-4">Cart is empty</h3>
        <Button linkTo="/shop">Show Products</Button>
      </section>
    );

  return (
    <section className="py-20">
      <div className="container grid grid-cols-3 gap-8">
        {products.length === 0 && <h3>Cart is empty</h3>}
        <div className="col-span-3 lg:col-span-2">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary-light hover:bg-primary-light">
                <TableHead className="w-[100px] text-text-color"></TableHead>
                <TableHead className="w-[150px] text-text-color">
                  Product
                </TableHead>
                <TableHead className="w-[150px] text-text-color">
                  Price
                </TableHead>
                <TableHead className="w-[50px] text-text-color">
                  Quantity
                </TableHead>
                <TableHead className="w-[150px] text-right text-text-color">
                  Subtotal
                </TableHead>
                <TableHead className="w-[50px] text-right text-text-color"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="pt-12">
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
                    <TableRow key={product.id} className="h-[120px]">
                      <TableCell className="font-medium">
                        <Link
                          to={`/product/${product.id}`}
                          className="flex overflow-hidden rounded-lg"
                        >
                          <img
                            src={product.image}
                            alt={product.title}
                            className="h-[100px] w-full object-cover"
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
                      <TableCell className="text-text-color-400">
                        {product.currency} {price}
                      </TableCell>
                      <TableCell>
                        <InputNumber
                          className="ml-3"
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
                      <TableCell className="text-right">
                        <button
                          onClick={() => dispatch(removeProduct(product.id))}
                        >
                          <Trash
                            size={24}
                            className="fill-primary stroke-primary"
                          />
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        <div className="col-span-3 flex flex-col items-center bg-primary-light px-8 py-4 pb-20 lg:col-span-1">
          <h3 className="mb-14 font-poppinsSemibold text-3xl">Cart Totals</h3>
          <div className="mb-14 flex w-full max-w-[250px] flex-col gap-10">
            <div className="flex justify-between">
              <span className="font-poppinsMedium text-base">Subtotal</span>
              <span className="font-poppinsMedium text-base text-text-color-400">
                {products[0]?.currency} {totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-poppinsMedium text-base">Total</span>
              <span className="font-poppinsMedium text-xl text-primary">
                {products[0]?.currency} {totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
          <Button outlined>Check Out</Button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
