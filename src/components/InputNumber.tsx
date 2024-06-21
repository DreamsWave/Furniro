import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/utils";

interface InputNumberProps {
  defaultNumber?: number;
  onValueChange: (value: number) => void;
  min?: number;
  showButtonsOnHover?: boolean;
  className?: string;
  small?: boolean;
}

const InputNumber = ({
  defaultNumber,
  onValueChange,
  min = 1,
  showButtonsOnHover = false,
  className,
  small = false,
}: InputNumberProps) => {
  const [count, setCount] = useState(defaultNumber ?? min);

  function handleDecrease() {
    if (count > min) {
      const newCount = count - 1;
      setCount(newCount);
      onValueChange(newCount);
    }
  }

  function handleIncrease() {
    const newCount = count + 1;
    setCount(newCount);
    onValueChange(newCount);
  }

  function handleInputValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(e.target.value);
    if (value >= min) {
      setCount(value);
      onValueChange(value);
    }
  }

  return (
    <div
      className={cn(
        "group relative flex h-16 w-fit",
        className,
        small && "h-8",
      )}
    >
      <Button
        className={cn(
          "flex h-full w-8 rounded-xl rounded-r-none border-r-0 border-text-color-400 p-0",
          small && "w-8",
          showButtonsOnHover &&
            "absolute right-full top-1/2 hidden -translate-y-1/2 group-hover:flex",
        )}
        variant="outline"
        onClick={handleDecrease}
      >
        <Minus size={12} />
      </Button>
      <input
        type="number"
        className={cn(
          "w-16 border-b-[1px] border-t-[1px] border-text-color-400 bg-white text-center font-poppinsMedium text-base outline-none",
          small && "w-8",
          showButtonsOnHover &&
            "rounded-md border-[1px] group-hover:rounded-none",
        )}
        value={count}
        min={1}
        onChange={handleInputValueChange}
      />
      <Button
        className={cn(
          "flex h-full w-8 rounded-xl rounded-l-none border-l-0 border-text-color-400 p-0",
          small && "w-8",
          showButtonsOnHover &&
            "absolute left-full top-1/2 hidden -translate-y-1/2 group-hover:flex",
        )}
        variant="outline"
        onClick={handleIncrease}
      >
        <Plus size={12} />
      </Button>
    </div>
  );
};

export default InputNumber;
