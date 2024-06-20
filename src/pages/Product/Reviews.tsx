import RatingStars from "@/components/RatingStars";
import { Product } from "@/types";
import { cn } from "@/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Button from "@/components/Button";
import { useState } from "react";

interface ReviewsProps {
  product: Product;
  className?: string;
}
const Reviews = ({ product, className }: ReviewsProps) => {
  const [reviewCount, setReviewCount] = useState(4);

  const remainingReviews = product.reviews.length - reviewCount;
  const showMoreButtonVisible = remainingReviews > 0;

  const loadMoreReviews = () => {
    setReviewCount(reviewCount + 10);
  };

  return (
    <section className={cn(className)}>
      <div className="container flex flex-col items-center">
        <ul className="mb-8 grid grid-cols-1 gap-10 md:grid-cols-2">
          {product.reviews.slice(0, reviewCount).map((review) => (
            <li key={review.id}>
              <div className="mb-2 flex gap-3">
                <Avatar>
                  <AvatarImage src={review.avatar} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-poppinsMedium text-lg text-text-color-100">
                    {review.author}
                  </h3>
                  <p className="font-poppins text-sm text-text-color-400">
                    {review.createdAt}
                  </p>
                </div>
              </div>
              <RatingStars rating={review.rating} className="mb-4" />
              <p>{review.text}</p>
            </li>
          ))}
        </ul>
        {showMoreButtonVisible && (
          <Button outlined onClick={loadMoreReviews}>
            Show More
          </Button>
        )}
      </div>
    </section>
  );
};

export default Reviews;
