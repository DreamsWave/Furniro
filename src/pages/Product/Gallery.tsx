import { Product } from "@/types";
import { cn } from "@/utils";
import { useState } from "react";

interface GalleryProps {
  product: Product;
  className?: string;
}

const Gallery = ({ product, className }: GalleryProps) => {
  const productImage = product.image || "";
  const additionalImages = product.images || [];

  const [allImages] = useState<string[]>([productImage, ...additionalImages]);
  const [activeImage, setActiveImage] = useState<string>(productImage);

  return (
    <div className={cn(className, "grid h-fit grid-cols-[80px,1fr] gap-8")}>
      <div className="flex flex-col gap-8">
        {allImages
          .filter((image) => image !== activeImage)
          .slice(0, 4)
          .map((image, index) => (
            <a
              key={index}
              onClick={() => setActiveImage(image)}
              className="overflow-hidden rounded-lg"
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
          className="h-[500px] object-cover"
        />
      </div>
    </div>
  );
};

export default Gallery;
