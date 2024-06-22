import { Trash } from "lucide-react";
import { removeProduct } from "./cartSlice";
import { useDispatch } from "react-redux";

interface RemoveFromCartButtonProps {
  productId: string;
}

const RemoveFromCartButton = ({ productId }: RemoveFromCartButtonProps) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(removeProduct(productId))}>
      <Trash
        size={24}
        className="fill-transparent stroke-primary hover:fill-primary"
      />
    </button>
  );
};

export default RemoveFromCartButton;
