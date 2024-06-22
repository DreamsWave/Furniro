import { Trash } from "lucide-react";
import { removeCartProduct } from "./cartSlice";
import { useDispatch } from "react-redux";

interface RemoveFromCartButtonProps {
  productId: string;
}

const RemoveFromCartButton = ({ productId }: RemoveFromCartButtonProps) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(removeCartProduct(productId))}>
      <Trash
        size={24}
        className="fill-transparent stroke-primary hover:fill-primary"
      />
    </button>
  );
};

export default RemoveFromCartButton;
