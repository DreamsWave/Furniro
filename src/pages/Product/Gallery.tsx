import { Product } from "@/types";
import { cn } from "@/utils";
import { useEffect, useState } from "react";

interface GalleryProps {
  product: Product;
  className?: string;
}

const Gallery = ({ product, className }: GalleryProps) => {
  const productImage = product.image || "";
  const additionalImages = product.images || [];

  const uniqueImages = new Set<string>([productImage, ...additionalImages]);

  const allImages = Array.from(uniqueImages);

  const [activeImage, setActiveImage] = useState<string>(productImage);

  useEffect(() => {
    setActiveImage(productImage);
  }, [productImage]);

  return (
    <div className={cn(className, "grid h-fit grid-cols-[80px,1fr] gap-8")}>
      <div className="flex flex-col gap-8">
        {allImages.slice(0, 4).map((image, index) => (
          <a
            key={index}
            onClick={() => setActiveImage(image)}
            className={cn(
              "overflow-hidden rounded-lg",
              image === activeImage && "ring ring-primary",
            )}
          >
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              className="h-[75px] w-full object-cover"
            />
          </a>
        ))}
      </div>
      <div className="overflow-hidden rounded-lg">
        <img
          src={activeImage}
          alt="Product Image"
          className="h-[500px] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Gallery;
