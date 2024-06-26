import {
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { getProducts } from "@/products";
import { RootState } from "@/store";
import { Product } from "@/types";
import { getDiscountedPrice } from "@/utils";
import { CircleX, ShoppingCart, SquareX } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeCartProduct } from "./cartSlice";
import { ScrollArea } from "@/components/ui/scroll-area";

const CardDialog = () => {
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

  return (
    <AlertDialog>
      <Link to="/cart" className="relative inline-flex md:hidden">
        <ShoppingCart size={28} />
        {cartProducts.length > 0 && (
          <span className="absolute bottom-0 right-0 flex h-4 w-4 translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-white font-poppinsBold text-sm text-primary ring-2 ring-primary">
            {cartProducts.length}
          </span>
        )}
      </Link>
      <AlertDialogTrigger className="relative hidden md:flex">
        <ShoppingCart size={28} />
        {cartProducts.length > 0 && (
          <span className="absolute bottom-0 right-0 flex h-4 w-4 translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-white font-poppinsBold text-sm text-primary ring-2 ring-primary">
            {cartProducts.length}
          </span>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent className="left-auto right-0 top-0 max-w-[400px] translate-x-0 translate-y-0 grid-rows-[1fr,auto] rounded-none p-0">
        <AlertDialogHeader className="p-7 pb-0">
          <AlertDialogTitle>
            <div className="flex justify-between gap-10">
              <p className="grow border-b-[1px] pb-6 font-poppinsSemibold text-2xl">
                Shopping Cart
              </p>
              <AlertDialogCancel className="group border-none bg-white p-0 hover:bg-white">
                <SquareX
                  size={28}
                  className="stroke-text-color-400 group-hover:stroke-primary"
                />
              </AlertDialogCancel>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription className="pb-4 pt-6" asChild>
            <div>
              {!cartProducts.length ? (
                <h3>Cart is empty</h3>
              ) : (
                <ScrollArea className="h-[400px] w-full pb-2 pr-4">
                  <ul className="flex flex-col gap-5">
                    {products.map((product) => {
                      const quantity =
                        cartProducts.find(
                          (cartProduct) => cartProduct.productId === product.id,
                        )?.quantity || 1;
                      const price = product.discountPercent
                        ? getDiscountedPrice(
                            product.price,
                            product.discountPercent,
                          )
                        : product.price;

                      return (
                        <li
                          key={product.id}
                          className="flex items-center justify-between gap-8"
                        >
                          <Link
                            to={`/product/${product.id}`}
                            className="flex items-center gap-8 overflow-hidden rounded-lg"
                          >
                            <div className="flex overflow-hidden rounded-lg">
                              <img
                                src={product.image}
                                alt={product.title}
                                className="h-[100px] w-[100px] object-cover"
                              />
                            </div>
                            <div className="flex flex-col">
                              <p className="mb-2 font-poppins text-base text-text-color">
                                {product.title}
                              </p>
                              <div className="flex items-center gap-3">
                                <span className="font-poppinsLight text-base text-text-color">
                                  {quantity}
                                </span>
                                <span className="font-poppinsLight text-xs text-text-color">
                                  X
                                </span>
                                <span className="font-poppinsMedium text-xs text-primary">
                                  {product.currency} {price}
                                </span>
                              </div>
                            </div>
                          </Link>
                          <button
                            onClick={() =>
                              dispatch(removeCartProduct(product.id))
                            }
                            className="group h-fit"
                          >
                            <CircleX
                              size={24}
                              className="fill-text-color-400 stroke-white group-hover:fill-primary"
                            />
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              )}
              {cartProducts.length > 0 && (
                <div className="mt-4 flex gap-24 text-base">
                  <span className="font-poppins text-text-color">Subtotal</span>
                  <span className="font-poppinsSemibold text-primary">
                    {products[0]?.currency} {totalPrice}
                  </span>
                </div>
              )}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="h-fit gap-2 border-t-[1px] p-6">
          <AlertDialogAction
            asChild
            className="rounded-3xl border-[1px] border-text-color bg-white px-7 py-2 font-poppins text-xs text-text-color hover:bg-primary hover:text-white"
          >
            <Link to="/cart">Cart</Link>
          </AlertDialogAction>
          <AlertDialogAction
            asChild
            className="rounded-3xl border-[1px] border-text-color bg-white px-7 py-2 font-poppins text-xs text-text-color hover:bg-primary hover:text-white"
          >
            <Link to="/checkout">Checkout</Link>
          </AlertDialogAction>
          <AlertDialogAction
            asChild
            className="rounded-3xl border-[1px] border-text-color bg-white px-7 py-2 font-poppins text-xs text-text-color hover:bg-primary hover:text-white"
          >
            <Link to="/comparison">Comparison</Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CardDialog;
