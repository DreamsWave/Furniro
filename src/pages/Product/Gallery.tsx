import { Product } from "@/types";
import { cn } from "@/utils";

interface GalleryProps {
  product: Product;
  className?: string;
}
const Gallery = ({ product, className }: GalleryProps) => {
  return (
    <div className={cn(className, "flex")}>Gallery of {product.title}</div>
  );
};

export default Gallery;
