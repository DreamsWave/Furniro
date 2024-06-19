import { Link } from "react-router-dom";
import { Share2, ArrowRightLeft, Heart, Image } from "lucide-react";
import Button from "@/components/Button";
import { Product } from "@/types";
import { useState } from "react";
import { cn } from "@/utils";

export const PlaceholderImage = () => {
  return (
    <div className="flex aspect-[2.8/3] w-full items-center justify-center bg-[#E1E2E5]">
      <Image color="#ffffff" size={64} />
    </div>
  );
};
interface ProductGridElementProps {
  linkTo: string;
  product: Product;
}
const ProductGridElement = ({
  linkTo,
  product: {
    image,
    title,
    description = "",
    currency,
    price,
    discountPercent = 0,
    isNew = false,
  },
}: ProductGridElementProps) => {
  const [showPlaceholderImage, setShowPlaceholderImage] = useState(false);
  return (
    <Link
      to={linkTo}
      className="group relative flex h-full flex-col overflow-hidden bg-[#F4F5F7]"
    >
      {image && (
        <img
          src={image}
          className={cn(
            "aspect-[2.8/3] w-full object-cover",
            showPlaceholderImage && "hidden",
          )}
          onError={() => setShowPlaceholderImage(true)}
        />
      )}
      {showPlaceholderImage && <PlaceholderImage />}
      <div className="flex flex-grow flex-col px-4 py-4">
        <h4 className="font-poppinsSemibold text-base text-text-color-100 md:text-xl">
          {title}
        </h4>
        <p className="mb-2 truncate font-poppinsMedium text-sm text-text-color-300 lg:text-base">
          {description}
        </p>
        <div className="spacing-y-1 lg:spacing-y-2 mt-auto flex flex-wrap items-center">
          <div className="flex flex-col items-center text-nowrap font-poppinsSemibold text-sm text-text-color-100 md:text-base lg:flex-row-reverse lg:gap-2 xl:text-lg">
            {discountPercent && (
              <span className="font-poppins text-sm text-text-color-400 line-through lg:text-sm">
                {currency} {Number(price).toLocaleString("en-GB")}
              </span>
            )}
            <span>
              {currency}{" "}
              {Number(
                Number(price) - (Number(discountPercent) / 100) * Number(price),
              ).toLocaleString("en-GB")}
            </span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-60 text-white opacity-0 transition-opacity group-hover:opacity-100">
        <Button secondary outlined className="px-8 py-2 text-sm">
          Add to cart
        </Button>
        <div className="mt-8 flex w-fit flex-col justify-around gap-8 px-1 xl:flex-row xl:gap-4">
          <button
            className="inline-flex items-center justify-center gap-1 font-poppinsSemibold text-base hover:text-primary"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Share2 size={14} />
            Share
          </button>
          <button
            className="inline-flex items-center justify-center gap-1 font-poppinsSemibold text-base hover:text-primary"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <ArrowRightLeft size={14} />
            Compare
          </button>
          <button
            className="inline-flex items-center justify-center gap-1 font-poppinsSemibold text-base hover:text-primary"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Heart size={14} />
            Like
          </button>
        </div>
      </div>
      <div className="absolute right-6 top-6 flex items-center space-x-2 font-poppinsMedium text-base">
        {isNew && (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2EC1AC] text-white">
            New
          </div>
        )}
        {discountPercent && discountPercent > 0 && (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E97171] text-white">
            {`-${discountPercent}%`}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductGridElement;
