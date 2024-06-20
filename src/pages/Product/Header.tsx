import RatingStars from "@/components/RatingStars";
import { Product } from "@/types";
import { cn, getDiscountedPrice } from "@/utils";

interface HeaderProps {
  product: Product;
  className?: string;
}
const Header = ({ product, className }: HeaderProps) => {
  return (
    <div className={cn(className, "flex flex-col")}>
      <h2 className="font-poppins text-[42px] text-text-color">
        {product.title}
      </h2>
      <div className="mb-4 flex gap-2 font-poppinsMedium text-2xl">
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
      <div className="mb-4 flex items-center space-x-6">
        <RatingStars rating={product.rating} />
        <div className="h-full w-[2px] bg-text-color-400/50"></div>
        <p className="font-poppins text-sm text-text-color-400">
          {product.reviews.length} Customer Review
        </p>
      </div>
      <p className="font-poppins text-sm text-text-color">
        {product.description}
      </p>
    </div>
  );
};

export default Header;
