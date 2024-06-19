import RatingStars from "@/components/RatingStars";
import { Product } from "@/types";
import { cn } from "@/utils";

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
      <p className="mb-4 font-poppinsMedium text-2xl text-text-color-400">
        {product.currency} {product.price}
      </p>
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
