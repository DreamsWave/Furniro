import Button from "@/components/Button";
import { Product, ProductColor, ProductSize } from "@/types";
import { cn } from "@/utils";
import { useEffect, useState } from "react";

interface ActionsProps {
  product: Product;
  className?: string;
}
const Actions = ({ product, className }: ActionsProps) => {
  const [activeSize, setActiveSize] = useState<ProductSize>();
  const [activeColor, setActiveColor] = useState<ProductColor>("black");

  useEffect(() => {
    if (product.sizes) {
      setActiveSize(product.sizes[0]);
    }
    if (product.colors) {
      setActiveColor(product.colors[0]);
    }
  }, [product.sizes, product.colors]);

  return (
    <div className={cn(className, "flex flex-col space-y-5")}>
      <div>
        <span className="font-poppins text-sm text-text-color-400">Size</span>
        <div className="mt-3 flex w-fit space-x-3">
          {product.sizes ? (
            product.sizes.map((size) => (
              <Button
                key={size}
                className={cn(
                  "flex min-w-12 items-center justify-center rounded-md border-none bg-primary-light p-3 font-poppins text-sm text-text-color hover:bg-primary hover:text-white",
                  activeSize === size && "bg-primary text-white",
                )}
                onClick={() => setActiveSize(size)}
              >
                {size}
              </Button>
            ))
          ) : (
            <Button
              className={cn(
                "flex min-w-12 items-center justify-center rounded-md border-none bg-primary p-3 font-poppins text-sm text-white",
              )}
            >
              Default
            </Button>
          )}
        </div>
      </div>
      <div>
        <span className="font-poppins text-sm text-text-color-400">Color</span>
        <div className="mt-3 flex w-fit space-x-3">
          {product.colors ? (
            product.colors.map((color) => (
              <button
                key={color}
                className={cn(
                  "flex h-[30px] w-[30px] items-center justify-center rounded-full border-none",
                  `bg-${color}-300 hover:bg-${color}-500`,
                  color === "black" && "bg-black hover:bg-black/80",
                  color === "white" && "bg-white hover:bg-white/80",
                  activeColor === color && "ring-2 ring-primary",
                )}
                onClick={() => setActiveColor(color)}
              ></button>
            ))
          ) : (
            <Button
              className={cn(
                "flex min-w-12 items-center justify-center rounded-md border-none bg-primary p-3 font-poppins text-sm text-white",
              )}
            >
              Default
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Actions;
