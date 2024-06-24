import { ArrowRightLeft } from "lucide-react";
import { useDispatch } from "react-redux";
import { addComparisonProduct } from "./comparisonSlice";

interface ComparisonAddButtonSmallProps {
  productId: string;
}

const ComparisonAddButtonSmall = ({
  productId,
}: ComparisonAddButtonSmallProps) => {
  const dispatch = useDispatch();
  return (
    <button
      className="inline-flex items-center justify-center gap-1 font-poppinsSemibold text-base hover:text-primary"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addComparisonProduct(productId));
      }}
    >
      <ArrowRightLeft size={14} />
      Compare
    </button>
  );
};

export default ComparisonAddButtonSmall;
