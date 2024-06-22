import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { addProduct } from "./comparisonSlice";

interface ComparisonAddButtonProps {
  productId: string;
}

const ComparisonAddButton = ({ productId }: ComparisonAddButtonProps) => {
  const dispatch = useDispatch();
  return (
    <Button
      className="flex h-16 items-center gap-1 rounded-2xl border-black px-12 font-poppins text-xl"
      variant="outline"
      onClick={() => dispatch(addProduct(productId))}
    >
      <Plus size={16} /> Compare
    </Button>
  );
};

export default ComparisonAddButton;
