import { SquareX } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeComparisonProduct } from "./comparisonSlice";
import { cn } from "@/utils";

interface ComparisonRemoveButtonProps {
  productId: string;
  className?: string;
}

const ComparisonRemoveButton = ({
  productId,
  className,
}: ComparisonRemoveButtonProps) => {
  const dispatch = useDispatch();
  return (
    <button
      className={cn("h-fit border-none bg-none p-0", className)}
      onClick={() => dispatch(removeComparisonProduct(productId))}
    >
      <SquareX size={24} className="fill-primary stroke-white" />
    </button>
  );
};

export default ComparisonRemoveButton;
