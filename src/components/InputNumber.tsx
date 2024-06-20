import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface InputNumberProps {
  defaultNumber?: number;
  onValueChange: (value: number) => void;
  min?: number;
}

const InputNumber = ({
  defaultNumber,
  onValueChange,
  min = 1,
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
    <div className="flex">
      <Button
        className="flex h-16 rounded-xl rounded-r-none border-r-0 border-text-color-400 px-2"
        variant="outline"
        onClick={handleDecrease}
      >
        <Minus size={12} />
      </Button>
      <input
        type="number"
        className="w-16 border-b-[1px] border-t-[1px] border-text-color-400 bg-white text-center font-poppinsMedium text-base outline-none"
        value={count}
        min={1}
        onChange={handleInputValueChange}
      />
      <Button
        className="flex h-16 rounded-xl rounded-l-none border-l-0 border-text-color-400 px-2"
        variant="outline"
        onClick={handleIncrease}
      >
        <Plus size={12} />
      </Button>
    </div>
  );
};

export default InputNumber;
