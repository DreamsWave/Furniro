import { Product } from "@/types";

interface HeaderProps {
  product: Product;
}
const Header = ({ product }: HeaderProps) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>
        {product.currency} {product.price}
      </p>
      <div>
        <div>{product.rating}</div>
        <div className="h-full w-[1px] bg-text-color-400"></div>
        <p>{product.reviews.length} Customer Review</p>
      </div>
      <p>{product.description}</p>
    </div>
  );
};

export default Header;
