import { Link } from "react-router-dom";
import { Share2, ArrowRightLeft, Heart, Image } from "lucide-react";
import Button from "@/components/Button";
import { Product } from "@/types";

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
  return (
    <Link
      to={linkTo}
      className="h-full bg-[#F4F5F7] relative flex flex-col group overflow-hidden"
    >
      {image ? (
        <img src={image} className="w-full aspect-[2.8/3] object-cover" />
      ) : (
        <div className="w-full aspect-[2.8/3] flex items-center justify-center bg-[#E1E2E5]">
          <Image color="#ffffff" size={64} />
        </div>
      )}
      <div className="py-4 px-4 flex flex-col flex-grow">
        <h4 className="font-poppinsSemibold text-base text-text-color-100 md:text-xl">
          {title}
        </h4>
        <p className="mb-2 font-poppinsMedium text-sm text-text-color-300 truncate lg:text-base">
          {description}
        </p>
        <div className="flex spacing-y-1 items-center flex-wrap mt-auto lg:spacing-y-2">
          <div className="flex flex-col font-poppinsSemibold text-sm text-text-color-100 items-center text-nowrap md:text-base lg:flex-row-reverse lg:gap-2 xl:text-lg">
            {discountPercent && (
              <span className="font-poppins text-sm text-text-color-400 line-through lg:text-sm">
                {currency} {Number(price).toLocaleString("en-GB")}
              </span>
            )}
            <span>
              {currency}{" "}
              {Number(
                Number(price) - (Number(discountPercent) / 100) * Number(price)
              ).toLocaleString("en-GB")}
            </span>
          </div>
        </div>
      </div>
      <div className="z-10 flex opacity-0 absolute inset-0 bg-black bg-opacity-60 flex-col justify-center items-center transition-opacity text-white group-hover:opacity-100">
        <Button secondary outlined className="py-2 text-sm px-8">
          Add to cart
        </Button>
        <div className="flex w-full gap-8 justify-around px-1 mt-8 flex-col xl:gap-1 xl:flex-row">
          <button
            className="inline-flex gap-1 font-poppinsSemibold text-base justify-center items-center hover:text-primary"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Share2 size={14} />
            Share
          </button>
          <button
            className="inline-flex gap-1 font-poppinsSemibold text-base justify-center items-center hover:text-primary"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <ArrowRightLeft size={14} />
            Compare
          </button>
          <button
            className="inline-flex gap-1 font-poppinsSemibold text-base justify-center items-center hover:text-primary"
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
      <div className="absolute top-6 right-6 space-x-2 flex items-center font-poppinsMedium text-base">
        {isNew && (
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2EC1AC] text-white">
            New
          </div>
        )}
        {discountPercent && discountPercent > 0 && (
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#E97171] text-white">
            {`-${discountPercent}%`}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductGridElement;
