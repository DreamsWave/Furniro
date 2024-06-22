import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addProduct } from "./cartSlice";

interface AddToCartButtonProps {
  productId: string;
  quantity?: number;
}

const AddToCartButton = ({ productId, quantity = 1 }: AddToCartButtonProps) => {
  const dispatch = useDispatch();

  return (
    <Button
      className="flex h-16 w-full rounded-2xl border-black px-12 font-poppins text-xl md:w-auto"
      variant="outline"
      onClick={() => dispatch(addProduct({ productId, quantity }))}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
