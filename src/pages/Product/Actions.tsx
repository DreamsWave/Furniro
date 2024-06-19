import { Button } from "@/components/ui/button";
import { Product, ProductColor, ProductSize } from "@/types";
import { cn } from "@/utils";
import { Facebook, Linkedin, Minus, Plus, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import colors from "tailwindcss/colors";

interface ActionsProps {
  product: Product;
  className?: string;
}
const Actions = ({ product, className }: ActionsProps) => {
  const [activeSize, setActiveSize] = useState<ProductSize>();
  const [activeColor, setActiveColor] = useState<ProductColor>("black");
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (product.sizes) {
      setActiveSize(product.sizes[0]);
    }
    if (product.colors) {
      setActiveColor(product.colors[0]);
    }
  }, [product.sizes, product.colors]);

  return (
    <div className={cn(className, "flex flex-col")}>
      <div className="mb-5">
        <span className="font-poppins text-sm text-text-color-400">Size</span>
        <div className="mt-3 flex w-fit space-x-3">
          {product.sizes ? (
            product.sizes.map((size) => (
              <Button
                key={size}
                className={cn(
                  "flex h-[30px] w-[30px] items-center justify-center rounded-md border-none bg-primary-light font-poppins text-sm text-text-color hover:bg-primary hover:text-white",
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
                "flex items-center justify-center rounded-md border-none bg-primary font-poppins text-sm text-white",
              )}
            >
              Default
            </Button>
          )}
        </div>
      </div>
      <div className="mb-8">
        <span className="font-poppins text-sm text-text-color-400">Color</span>
        <div className="mt-3 flex w-fit space-x-3">
          {product.colors ? (
            product.colors.map((color) => (
              <button
                key={color}
                className={cn(
                  "flex h-[30px] w-[30px] items-center justify-center rounded-full border-none",
                  color === "black" && "bg-black",
                  color === "white" && "bg-white",
                  activeColor === color && "ring-2 ring-primary",
                )}
                onClick={() => setActiveColor(color)}
                style={{ backgroundColor: colors[color][400] }}
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
      <div className="flex w-fit flex-col space-y-3 border-b-[1px] border-b-text-color-400/50 pb-14 xl:flex-row xl:space-x-3 xl:space-y-0">
        <div className="flex space-x-3">
          <div className="flex">
            <Button
              className="flex h-16 rounded-xl rounded-r-none border-r-0 border-text-color-400 px-2"
              variant="outline"
              onClick={() => setCount(count === 1 ? 1 : count - 1)}
            >
              <Minus size={12} />
            </Button>
            <input
              type="number"
              className="w-16 border-b-[1px] border-t-[1px] border-text-color-400 bg-white text-center font-poppinsMedium text-base outline-none"
              value={count}
              min={1}
              onChange={(e) => setCount(parseInt(e.target.value))}
            />
            <Button
              className="flex h-16 rounded-xl rounded-l-none border-l-0 border-text-color-400 px-2"
              variant="outline"
              onClick={() => setCount(count + 1)}
            >
              <Plus size={12} />
            </Button>
          </div>
          <Button
            className="flex h-16 rounded-2xl border-black px-12 font-poppins text-xl"
            variant="outline"
          >
            Add to Cart
          </Button>
        </div>
        <Button
          className="flex h-16 items-center gap-1 rounded-2xl border-black px-12 font-poppins text-xl"
          variant="outline"
        >
          <Plus size={16} /> Compare
        </Button>
      </div>
      <div className="mt-10 grid w-fit grid-cols-[min-content_1fr] place-items-baseline items-center gap-3 font-poppins text-base text-text-color-400">
        <span className="relative flex w-full after:absolute after:-right-4 after:content-[':']">
          SKU
        </span>
        <span className="pl-6">{product.sku}</span>

        <span className="relative flex w-full after:absolute after:-right-4 after:content-[':']">
          Category
        </span>
        <span className="pl-6">{product.category}</span>

        <span className="relative flex w-full after:absolute after:-right-4 after:content-[':']">
          Tags
        </span>
        <span className="pl-6">{product.tags?.join(", ")}</span>

        <span className="relative flex w-full after:absolute after:-right-4 after:content-[':']">
          Share
        </span>
        <span className="inline-flex space-x-4 pl-6">
          <Button className="group bg-transparent p-0 hover:bg-transparent">
            <Facebook
              size={20}
              className="stroke-black group-hover:stroke-primary"
            />
          </Button>
          <Button className="group bg-transparent p-0 hover:bg-transparent">
            <Linkedin
              size={20}
              className="stroke-black group-hover:stroke-primary"
            />
          </Button>
          <Button className="group bg-transparent p-0 hover:bg-transparent">
            <Twitter
              size={20}
              className="stroke-black group-hover:stroke-primary"
            />
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Actions;
