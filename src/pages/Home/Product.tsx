import { Link } from "react-router-dom";
import { Share2, ArrowRightLeft, Heart } from "lucide-react";
import Button from "../../components/Button";

interface ProductProps {
  linkTo: string;
  image: string;
  title: string;
  description?: string;
  currency: string;
  price: string;
  discountPercent?: string;
}
const Product = ({
  linkTo,
  image,
  title,
  description = "",
  currency,
  price,
  discountPercent = "",
}: ProductProps) => {
  return (
    <Link
      to={linkTo}
      className="bg-[#F4F5F7] relative flex flex-col h-full w-full group"
    >
      <img src={image} className="xl:max-w-[280px] xl:h-[300px]" />
      <div className="py-4 pb-7 px-4 flex flex-col gap-2 h-full">
        <h4 className="font-poppinsSemibold text-2xl text-text-color-100">
          {title}
        </h4>
        <p className="font-poppinsMedium text-base text-text-color-300">
          {description}
        </p>
        <div className="flex gap-2 items-center flex-wrap mt-auto">
          <span className="font-poppinsSemibold text-xl text-text-color-100">
            {currency}{" "}
            {Number(
              Number(price) - (Number(discountPercent) / 100) * Number(price)
            ).toLocaleString("en-GB")}
          </span>
          {discountPercent && (
            <span className="font-poppins text-base text-text-color-400 line-through">
              {currency} {Number(price).toLocaleString("en-GB")}
            </span>
          )}
        </div>
      </div>
      <div className="flex opacity-0 absolute inset-0 bg-black bg-opacity-60 flex-col justify-center items-center transition-opacity text-white group-hover:opacity-100">
        <Button secondary outlined className="py-2 text-sm px-8">
          Add to cart
        </Button>
        <div className="flex w-full gap-8 justify-around px-1 mt-8 flex-col xl:gap-1 xl:flex-row">
          <button className="inline-flex gap-1 font-poppinsSemibold text-base justify-center items-center">
            <Share2 size={14} />
            Share
          </button>
          <button className="inline-flex gap-1 font-poppinsSemibold text-base justify-center items-center">
            <ArrowRightLeft size={14} />
            Compare
          </button>
          <button className="inline-flex gap-1 font-poppinsSemibold text-base justify-center items-center">
            <Heart size={14} />
            Like
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
