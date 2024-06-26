import React from "react";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/utils";

type SelectItemProps = {
  children: React.ReactNode;
  className?: string;
} & Omit<React.ComponentProps<typeof Select.Item>, "as" | "ref">;

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={cn(
          "relative flex h-6 cursor-pointer select-none items-center px-6 text-xl leading-none hover:text-primary data-[disabled]:pointer-events-none data-[highlighted]:outline-none",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 inline-flex h-6 w-6 items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);

interface SelectProps {
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  options: Array<{ value: string; text: string }>;
  placeholder?: string;
  className?: string;
}
const SelectComponent = ({
  onValueChange,
  defaultValue,
  options,
  placeholder,
  className,
}: SelectProps) => (
  <Select.Root onValueChange={onValueChange} defaultValue={defaultValue}>
    <Select.Trigger
      className={cn(
        "inline-flex items-center justify-center bg-white px-5 py-3 font-poppins text-xl text-text-color-400 outline-none",
        className,
      )}
    >
      <Select.Value placeholder={placeholder} />
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="overflow-hidden bg-white">
        <Select.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="p-[5px]">
          <Select.Group className="flex flex-col space-y-3 py-3 text-sm md:text-xl">
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.text}
              </SelectItem>
            ))}
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

export default SelectComponent;
