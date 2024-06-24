import RatingStars from "@/components/RatingStars";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/types";
import { cn, getDiscountedPrice } from "@/utils";
import { Link } from "react-router-dom";

interface HeaderProps {
  product: Product;
  className?: string;
  small?: boolean;
  linkableTitle?: boolean;
}
const Header = ({
  product,
  className,
  small = false,
  linkableTitle = false,
}: HeaderProps) => {
  return (
    <div className={cn(className, "flex flex-col")}>
      {linkableTitle ? (
        <Link to={`/product/${product.id}`}>
          <h2
            className={cn(
              "text-start font-poppins text-[42px] text-text-color hover:text-primary",
              small && "text-2xl",
            )}
          >
            {product.title}
          </h2>
        </Link>
      ) : (
        <h2
          className={cn(
            "text-start font-poppins text-[42px] text-text-color",
            small && "text-2xl",
          )}
        >
          {product.title}
        </h2>
      )}
      <div
        className={cn(
          "mb-4 flex gap-2 font-poppinsMedium text-2xl",
          small && "mb-0 text-lg",
        )}
      >
        <span className="text-text-color-100">
          {product.currency}{" "}
          {getDiscountedPrice(product.price, Number(product.discountPercent))}
        </span>
        {product.discountPercent && (
          <span className="text-lg text-text-color-400 line-through">
            {product.currency} {product.price}
          </span>
        )}
      </div>
      <Link
        className="group mb-4 flex items-center space-x-6"
        to={`/product/${product.id}?tab=reviews`}
      >
        <div className="inline-flex items-center space-x-1">
          <span className="font-poppinsMedium text-lg">{product.rating}</span>
          <RatingStars rating={product.rating} />
        </div>
        <Separator orientation="vertical" />
        <p
          className={cn(
            "font-poppins text-sm text-text-color-400",
            "group-hover:text-primary",
          )}
        >
          {product.reviews.length} Customer Review
        </p>
      </Link>
      {!small && (
        <p className="font-poppins text-sm text-text-color">
          {product.description}
        </p>
      )}
    </div>
  );
};

export default Header;
