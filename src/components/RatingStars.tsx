import { cn } from "@/utils";
import { Star, StarHalf } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  className?: string;
}

const RatingStars = ({ rating, className }: RatingStarsProps) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(
        <Star
          size={20}
          key={i}
          className="fill-yellow-400 stroke-yellow-400"
        />,
      );
    } else if (hasHalfStar && i === fullStars + 1) {
      stars.push(
        <StarHalf
          size={20}
          key={i}
          className="fill-yellow-400 stroke-yellow-400"
        />,
      );
    }
  }

  return <div className={cn(className, "flex space-x-1")}>{stars}</div>;
};

export default RatingStars;
